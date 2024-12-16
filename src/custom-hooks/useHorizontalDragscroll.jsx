import { useRef, useEffect } from 'react';

const useHorizontalDragScroll = () => {
  const containerRef = useRef(null);
  const stateRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const container = containerRef.current;

    // Check if container is available
    if (!containerRef.current) return;
    
    if (!container) return;

    const handleMouseDown = (e) => {
      e.preventDefault();
      stateRef.current.isDragging = true;
      stateRef.current.startX = e.pageX - container.offsetLeft; // Capture initial cursor position
      stateRef.current.scrollLeft = container.scrollLeft; // Capture initial scroll position
      container.style.cursor = 'grabbing'; // Update cursor style
    };

    const handleMouseMove = (e) => {
      if (!stateRef.current.isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft; // Current cursor position
      const walk = x - stateRef.current.startX; // Calculate drag distance
      container.scrollLeft = stateRef.current.scrollLeft - walk; // Adjust scroll position
    };

    const handleMouseUpOrLeave = () => {
      stateRef.current.isDragging = false;
      container.style.cursor = 'grab'; // Reset cursor style
    };

    // Attach event listeners dynamically only if the container exists
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUpOrLeave);
    container.addEventListener('mouseleave', handleMouseUpOrLeave);

    // Cleanup event listeners
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUpOrLeave);
      container.removeEventListener('mouseleave', handleMouseUpOrLeave);
    };
  }, [containerRef.current]); // Ensure this effect re-runs if the ref changes

  return containerRef;
};

export default useHorizontalDragScroll;
