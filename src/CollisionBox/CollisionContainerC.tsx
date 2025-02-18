import { useEffect, useRef } from "react";

interface Box {
  x: number;
  y: number;
  speed: number;
  width: number;
  height: number;
  isMoving: boolean;
  direction: 1 | -1; // 1 for right, -1 for left
  color: string;
}

interface CanvasSize {
  width: number;
  direction: 1 | -1;
  changeRate: number;
}
export default function CollisionContainerC() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(null);
  const collisionSound = useRef<HTMLAudioElement>(new Audio("/sound.mp3"));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    // Canvas animation properties
    const canvasSize: CanvasSize = {
      width: 800,
      direction: -1,
      changeRate: 1,
    };

    canvas.height = 770;
    // Box properties
    const boxWidth = 100;
    const boxHeight = 100;
    const boxSpacing = 10;
    const startX = 5;
    const speed = 3;

    const boxColors = [
      "#ff1600",
      "#ffaf01",
      "#ffaf01",
      "#06db00",
      "#010aff",
      "#5c0c96",
      "#ab1be3",
    ];

    // Create boxes array
    const boxes: Box[] = Array.from({ length: 7 }, (_, i) => ({
      x: startX,
      y: 5 + i * (boxHeight + boxSpacing),
      speed,
      width: boxWidth,
      height: boxHeight,
      isMoving: false,
      direction: 1,
      color: boxColors[i],
    }));

    // Set delays for each box
    const delays = [500, 800, 1100, 1400, 1700, 2000, 2300];

    // Start animation for each box after its delay
    delays.forEach((delay, index) => {
      setTimeout(() => {
        boxes[index].isMoving = true;
      }, delay);
    });

    const playCollisionSound = () => {
      collisionSound.current.currentTime = 0;
      collisionSound.current
        .play()
        .catch((err) => console.log("Audio play failed:", err));
    };

    const animateCanvas = (canvasSize: CanvasSize): void => {
      if (canvasSize.direction === -1) {
        canvasSize.width -= 1;
        if (canvasSize.width <= 110) {
          canvasSize.direction = 1;
          canvasSize.changeRate = 2;
        }
      } else {
        canvasSize.width += 2;
        if (canvasSize.width >= 800) {
          canvasSize.direction = -1;
          canvasSize.changeRate = 1;
        }
      }
      canvas.width = canvasSize.width;
    };

    const animate = () => {
      // Animate canvas width
      animateCanvas(canvasSize);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw container outline
      ctx.lineWidth = 8;
      ctx.strokeStyle = "#adadad";
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      // Update and draw boxes
      boxes.forEach((box) => {
        if (box.isMoving) {
          // Store previous direction
          const prevDirection = box.direction;
          // Update position
          box.x += box.speed * box.direction;
          // Check right boundary
          if (box.x + box.width >= canvas.width - 8) {
            box.x = canvas.width - box.width - 8;
            box.direction = -1;
          }
          // Check left boundary
          if (box.x <= 5) {
            box.x = 5;
            box.direction = 1;
          }
          // If direction changed, play sound
          if (prevDirection !== box.direction) {
            playCollisionSound();
          }
        }
        // Draw box
        ctx.fillStyle = box.color;
        ctx.fillRect(box.x, box.y, box.width, box.height);
        // Draw box outline
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(box.x, box.y, box.width, box.height);
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
