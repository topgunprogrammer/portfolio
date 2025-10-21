import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

const NotFound = () => {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("dinoHighScore") || "0")
  );
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Game state
    const game = {
      dino: {
        x: 50,
        y: 150,
        width: 40,
        height: 40,
        velocityY: 0,
        isJumping: false,
        jumpPower: -12,
        gravity: 0.6,
      },
      obstacles: [],
      ground: 200,
      speed: 3,
      score: 0,
      gameStarted: false,
      gameOver: false,
    };

    gameRef.current = game;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      game.ground = canvas.height - 50;
      game.dino.y = game.ground - game.dino.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Obstacle class
    class Obstacle {
      constructor() {
        this.width = 20;
        this.height = Math.random() > 0.5 ? 40 : 25; // Tall or short cactus
        this.x = canvas.width;
        this.y = game.ground - this.height;
        this.speed = game.speed;
      }

      update() {
        this.x -= this.speed;
      }

      draw() {
        // Draw stylized cactus
        ctx.fillStyle = "#00ff88";
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Add some details
        ctx.fillStyle = "#00cc66";
        ctx.fillRect(this.x + 2, this.y + 5, 4, this.height - 10);
        ctx.fillRect(this.x + this.width - 6, this.y + 8, 4, this.height - 16);

        // Glow effect
        ctx.shadowColor = "#00ff88";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#00ff88";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowBlur = 0;
      }

      collidesWith(dino) {
        return (
          dino.x < this.x + this.width &&
          dino.x + dino.width > this.x &&
          dino.y < this.y + this.height &&
          dino.y + dino.height > this.y
        );
      }
    }

    // Input handling
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        event.preventDefault();

        if (!game.gameStarted) {
          startGame();
        } else if (game.gameOver) {
          resetGame();
        } else if (!game.dino.isJumping) {
          jump();
        }
      }
    };

    const handleClick = () => {
      if (!game.gameStarted) {
        startGame();
      } else if (game.gameOver) {
        resetGame();
      } else if (!game.dino.isJumping) {
        jump();
      }
    };

    const startGame = () => {
      game.gameStarted = true;
      game.gameOver = false;
      setGameStarted(true);
      setGameOver(false);
    };

    const jump = () => {
      if (!game.dino.isJumping) {
        game.dino.velocityY = game.dino.jumpPower;
        game.dino.isJumping = true;
      }
    };

    const resetGame = () => {
      game.obstacles = [];
      game.score = 0;
      game.speed = 3;
      game.gameOver = false;
      game.dino.y = game.ground - game.dino.height;
      game.dino.velocityY = 0;
      game.dino.isJumping = false;
      setScore(0);
      setGameOver(false);
    };

    // Game loop
    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!game.gameStarted) {
        // Draw start screen
        drawStartScreen();
      } else if (game.gameOver) {
        // Draw game over screen
        drawGameOverScreen();
      } else {
        // Update game
        updateGame();
      }

      // Draw ground
      drawGround();

      requestAnimationFrame(gameLoop);
    };

    const drawStartScreen = () => {
      // Draw dino
      drawDino();

      // Instructions
      ctx.fillStyle = "#00ff88";
      ctx.font = "24px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        "Press SPACEBAR or CLICK to start!",
        canvas.width / 2,
        canvas.height / 2 - 50
      );

      ctx.font = "16px Arial";
      ctx.fillText(
        "Jump over the obstacles to score points",
        canvas.width / 2,
        canvas.height / 2 - 20
      );
    };

    const drawGameOverScreen = () => {
      // Draw all elements
      updateGame(true);

      // Game over text
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ff4444";
      ctx.font = "bold 32px Arial";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 60);

      ctx.fillStyle = "#00ff88";
      ctx.font = "20px Arial";
      ctx.fillText(
        `Score: ${game.score}`,
        canvas.width / 2,
        canvas.height / 2 - 20
      );
      ctx.fillText(
        `High Score: ${highScore}`,
        canvas.width / 2,
        canvas.height / 2 + 10
      );

      ctx.fillStyle = "#ffffff";
      ctx.font = "16px Arial";
      ctx.fillText(
        "Press SPACEBAR or CLICK to restart",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    };

    const updateGame = (frozen = false) => {
      if (!frozen) {
        // Update dino physics
        if (game.dino.isJumping) {
          game.dino.velocityY += game.dino.gravity;
          game.dino.y += game.dino.velocityY;

          if (game.dino.y >= game.ground - game.dino.height) {
            game.dino.y = game.ground - game.dino.height;
            game.dino.isJumping = false;
            game.dino.velocityY = 0;
          }
        }

        // Spawn obstacles
        if (Math.random() < 0.01) {
          game.obstacles.push(new Obstacle());
        }

        // Update obstacles
        game.obstacles = game.obstacles.filter((obstacle) => {
          obstacle.update();
          return obstacle.x + obstacle.width > 0;
        });

        // Check collisions
        for (let obstacle of game.obstacles) {
          if (obstacle.collidesWith(game.dino)) {
            game.gameOver = true;
            setGameOver(true);

            // Update high score
            if (game.score > highScore) {
              setHighScore(game.score);
              localStorage.setItem("dinoHighScore", game.score.toString());
            }
            break;
          }
        }

        // Update score and speed
        game.score += 0.1;
        game.speed = 3 + Math.floor(game.score / 100) * 0.5;
        setScore(Math.floor(game.score));
      }

      // Draw everything
      drawDino();
      drawObstacles();
      drawScore();
    };

    const drawDino = () => {
      const dino = game.dino;

      // Body (rectangle with rounded corners effect)
      ctx.fillStyle = "#00ff88";
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

      // Head
      ctx.fillStyle = "#00cc66";
      ctx.fillRect(dino.x + 25, dino.y - 10, 15, 15);

      // Eye
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(dino.x + 30, dino.y - 7, 3, 3);

      // Legs (simple animation)
      const legOffset = Math.sin(Date.now() * 0.01) * 2;
      ctx.fillStyle = "#00ff88";
      ctx.fillRect(dino.x + 5, dino.y + dino.height, 8, 8 + legOffset);
      ctx.fillRect(dino.x + 20, dino.y + dino.height, 8, 8 - legOffset);

      // Glow effect
      ctx.shadowColor = "#00ff88";
      ctx.shadowBlur = 15;
      ctx.fillStyle = "#00ff88";
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
      ctx.shadowBlur = 0;
    };

    const drawObstacles = () => {
      game.obstacles.forEach((obstacle) => obstacle.draw());
    };

    const drawGround = () => {
      ctx.fillStyle = "#333333";
      ctx.fillRect(0, game.ground, canvas.width, canvas.height - game.ground);

      // Ground pattern
      ctx.strokeStyle = "#555555";
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, game.ground);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
    };

    const drawScore = () => {
      ctx.fillStyle = "#00ff88";
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "right";
      ctx.fillText(`Score: ${Math.floor(game.score)}`, canvas.width - 20, 30);

      if (highScore > 0) {
        ctx.font = "16px Arial";
        ctx.fillText(`High: ${highScore}`, canvas.width - 20, 55);
      }
    };

    // Event listeners
    document.addEventListener("keydown", handleKeyPress);
    canvas.addEventListener("click", handleClick);

    // Start game loop
    gameLoop();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("keydown", handleKeyPress);
      canvas.removeEventListener("click", handleClick);
    };
  }, [highScore]);

  return (
    <div className="not-found-page">
      <div className="stars-bg">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="not-found-content">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="error-header"
        >
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Oops! Page Not Found</h2>
          <p className="error-subtitle">
            Looks like you've ventured into uncharted territory! 🚀
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="game-container"
        >
          <h3 className="game-title">
            🦕 While you're here, why not play the Dino Game?
          </h3>
          <div className="game-info">
            <span className="score-display">Score: {score}</span>
            {highScore > 0 && (
              <span className="high-score">High Score: {highScore}</span>
            )}
          </div>

          <canvas
            ref={canvasRef}
            className="dino-canvas"
            width="800"
            height="300"
          />

          <div className="game-instructions">
            <p>
              🎮 Use <kbd>SPACEBAR</kbd> or <kbd>CLICK</kbd> to jump over
              obstacles!
            </p>
            {gameOver && (
              <p className="game-over-text">
                💀 Game Over! Press <kbd>SPACEBAR</kbd> to restart
              </p>
            )}
            {!gameStarted && !gameOver && (
              <p className="start-text">
                ✨ Press <kbd>SPACEBAR</kbd> to start your adventure!
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="navigation-section"
        >
          <h3>🧭 Let's get you back on track:</h3>
          <div className="nav-buttons">
            <Link to="/" className="nav-button primary">
              🏠 Home
            </Link>
            <Link to="/projects" className="nav-button">
              💼 Projects
            </Link>
            <Link to="/experience" className="nav-button">
              🚀 Experience
            </Link>
            <Link to="/contact" className="nav-button">
              📧 Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
