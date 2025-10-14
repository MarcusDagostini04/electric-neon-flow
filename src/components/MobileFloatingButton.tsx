import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileFloatingButton = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-40">
      <Button
        size="lg"
        className="btn-neon w-full text-lg py-4 shadow-neon-strong floating-btn font-bold"
        onClick={() => window.open('https://pay.hotmart.com/G98352360L', '_blank', 'noopener')}
      >
        🚀 Garantir vaga
      </Button>
    </div>
  );
};

export default MobileFloatingButton;