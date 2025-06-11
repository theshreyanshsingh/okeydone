import { cn } from "@/lib/utils";
import { useRef, useCallback } from "react";

export const GlareCard = ({ children, className }) => {
  const isPointerInside = useRef(false);
  const refElement = useRef(null);
  const animationFrame = useRef(null);
  const lastUpdate = useRef(0);

  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  };

  const backgroundStyle = {
    "--step": "5%",
    "--rainbow":
      "repeating-linear-gradient( 45deg, #FFC64E calc(var(--step) * 1), #A374FF calc(var(--step) * 2), #FFC64E calc(var(--step) * 3), rgba(255,198,78,1) calc(var(--step) * 4), rgba(163,116,255,1) calc(var(--step) * 5), #FFC64E calc(var(--step) * 6), #A374FF calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal":
      "repeating-linear-gradient( 128deg, #4a4b4b 0%, rgba(255,198,78,0.8) 3.8%, rgba(163,116,255,0.7) 4.5%, rgba(255,198,78,0.8) 5.2%, #4a4b4b 10%, #4a4b4b 12% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    "--shade":
      "radial-gradient( farthest-corner circle at var(--m-x) var(--m-y), rgba(255,198,78,0.7) 12%, rgba(163,116,255,0.6) 20%, rgba(255,255,255,0.3) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "overlay, soft-light, multiply, normal",
  };

  // Throttled update function using requestAnimationFrame
  const updateStyles = useCallback(() => {
    if (!refElement.current) return;

    const now = Date.now();
    // Throttle updates to max 60fps (16.67ms)
    if (now - lastUpdate.current < 16) return;
    lastUpdate.current = now;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(() => {
      if (!refElement.current) return;

      const element = refElement.current;
      const { background, rotate, glare } = state.current;

      // Batch DOM updates
      element.style.setProperty("--m-x", `${glare.x}%`);
      element.style.setProperty("--m-y", `${glare.y}%`);
      element.style.setProperty("--r-x", `${rotate.x}deg`);
      element.style.setProperty("--r-y", `${rotate.y}deg`);
      element.style.setProperty("--bg-x", `${background.x}%`);
      element.style.setProperty("--bg-y", `${background.y}%`);
    });
  }, []);

  // Smooth interpolation for values
  const lerp = (start, end, factor) => start + (end - start) * factor;

  const handlePointerMove = useCallback(
    (event) => {
      if (!isPointerInside.current) return;

      const rotateFactor = 0.4;
      const smoothingFactor = 0.1;
      const rect = event.currentTarget.getBoundingClientRect();

      const position = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      const percentage = {
        x: Math.max(0, Math.min(100, (100 / rect.width) * position.x)),
        y: Math.max(0, Math.min(100, (100 / rect.height) * position.y)),
      };

      const delta = {
        x: percentage.x - 50,
        y: percentage.y - 50,
      };

      const { background, rotate, glare } = state.current;

      // Target values
      const targetBackground = {
        x: 50 + percentage.x / 4 - 12.5,
        y: 50 + percentage.y / 3 - 16.67,
      };

      const targetRotate = {
        x: -(delta.x / 3.5) * rotateFactor,
        y: (delta.y / 2) * rotateFactor,
      };

      const targetGlare = {
        x: percentage.x,
        y: percentage.y,
      };

      // Smooth interpolation to reduce jitter
      background.x = lerp(background.x, targetBackground.x, smoothingFactor);
      background.y = lerp(background.y, targetBackground.y, smoothingFactor);
      rotate.x = lerp(rotate.x, targetRotate.x, smoothingFactor);
      rotate.y = lerp(rotate.y, targetRotate.y, smoothingFactor);
      glare.x = lerp(glare.x, targetGlare.x, smoothingFactor);
      glare.y = lerp(glare.y, targetGlare.y, smoothingFactor);

      updateStyles();
    },
    [updateStyles]
  );

  const handlePointerEnter = useCallback(() => {
    isPointerInside.current = true;
    if (refElement.current) {
      setTimeout(() => {
        if (isPointerInside.current && refElement.current) {
          refElement.current.style.setProperty("--duration", "0s");
        }
      }, 300);
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    isPointerInside.current = false;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    if (refElement.current) {
      const element = refElement.current;
      element.style.removeProperty("--duration");

      // Smooth reset to default position
      const resetAnimation = () => {
        const { background, rotate, glare } = state.current;
        const resetFactor = 0.1;

        background.x = lerp(background.x, 50, resetFactor);
        background.y = lerp(background.y, 50, resetFactor);
        rotate.x = lerp(rotate.x, 0, resetFactor);
        rotate.y = lerp(rotate.y, 0, resetFactor);
        glare.x = lerp(glare.x, 50, resetFactor);
        glare.y = lerp(glare.y, 50, resetFactor);

        const isNearDefault =
          Math.abs(background.x - 50) < 0.1 &&
          Math.abs(background.y - 50) < 0.1 &&
          Math.abs(rotate.x) < 0.1 &&
          Math.abs(rotate.y) < 0.1 &&
          Math.abs(glare.x - 50) < 0.1 &&
          Math.abs(glare.y - 50) < 0.1;

        if (!isNearDefault && refElement.current) {
          element.style.setProperty("--m-x", `${glare.x}%`);
          element.style.setProperty("--m-y", `${glare.y}%`);
          element.style.setProperty("--r-x", `${rotate.x}deg`);
          element.style.setProperty("--r-y", `${rotate.y}deg`);
          element.style.setProperty("--bg-x", `${background.x}%`);
          element.style.setProperty("--bg-y", `${background.y}%`);

          requestAnimationFrame(resetAnimation);
        } else if (refElement.current) {
          element.style.setProperty("--m-x", "50%");
          element.style.setProperty("--m-y", "50%");
          element.style.setProperty("--r-x", "0deg");
          element.style.setProperty("--r-y", "0deg");
          element.style.setProperty("--bg-x", "50%");
          element.style.setProperty("--bg-y", "50%");
        }
      };

      requestAnimationFrame(resetAnimation);
    }
  }, []);

  return (
    <div
      style={containerStyle}
      className="relative isolate [contain:layout_style] [perspective:300px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-[320px] [aspect-ratio:9/7]"
      ref={refElement}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border-2 border-[#FFC64E] hover:[--opacity:3.5] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none hover:brightness-200 hover:saturate-200 hover:contrast-125 overflow-hidden shadow-lg shadow-black/20">
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
          <div
            className={cn(
              "h-full w-full bg-gradient-to-br from-[#3a3b3b] via-[#4a4b4b] to-[#3a3b3b] transition-all duration-300 hover:from-[#4a4b4b] hover:via-[#5a5b5b] hover:to-[#4a4b4b]",
              className
            )}
          >
            {children}
          </div>
        </div>
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-overlay [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.9)_5%,_rgba(255,198,78,1)_15%,_rgba(163,116,255,0.9)_35%,_rgba(255,255,255,0.7)_70%,_rgba(255,255,255,0.2)_90%)]" />
        <div
          className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light opacity-[var(--opacity)] will-change-background transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:overlay_soft-light_multiply_normal] [background:var(--rainbow),_var(--diagonal),_var(--shade)] relative after:content-[''] after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] after:bg-[inherit] after:mix-blend-color-dodge after:[background-size:200%_400%,_800%,_200%] after:[background-position:0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_overlay,_hard-light]"
          style={backgroundStyle}
        />
      </div>
    </div>
  );
};

// Demo component to showcase the card
export default function GlareCardDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 - Default */}
        <GlareCard>
          <div className="h-full flex flex-col justify-between p-6 text-white">
            <div>
              <h3 className="text-xl font-bold text-[#FFC64E] mb-2">
                Premium Card
              </h3>
              <p className="text-sm opacity-80">
                Hover to see the magic glare effect
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#A374FF] font-semibold">$99</span>
              <div className="w-8 h-8 rounded-full bg-[#FFC64E] flex items-center justify-center">
                <span className="text-[#212222] text-xs font-bold">★</span>
              </div>
            </div>
          </div>
        </GlareCard>

        {/* Card 2 - Feature Card */}
        <GlareCard>
          <div className="h-full flex flex-col justify-center items-center p-6 text-center text-white">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FFC64E] to-[#A374FF] flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-bold text-[#FFC64E] mb-2">
              Launch Ready
            </h3>
            <p className="text-sm opacity-80">Experience the future</p>
          </div>
        </GlareCard>

        {/* Card 3 - Stats Card */}
        <GlareCard>
          <div className="h-full flex flex-col justify-between p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#A374FF] text-sm font-medium">
                  Total Sales
                </p>
                <p className="text-2xl font-bold text-[#FFC64E]">$12,345</p>
              </div>
              <div className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">
                +15.3%
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="opacity-70">This month</span>
                <span className="text-[#A374FF]">$2,341</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#FFC64E] to-[#A374FF] h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </GlareCard>
      </div>
    </div>
  );
}
