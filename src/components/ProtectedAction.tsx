
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthModal } from './AuthModal';
import { Button } from '@/components/ui/button';

interface ProtectedActionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export const ProtectedAction = ({ children, fallback, className }: ProtectedActionProps) => {
  const { isAuthenticated } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return (
    <>
      <Button 
        onClick={() => setShowAuth(true)}
        className={className}
        variant="outline"
      >
        Se connecter pour continuer
      </Button>
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
};
