import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm bg-card rounded-2xl shadow-card p-8 border border-border text-center">
        <h1 className="text-2xl font-extrabold text-gradient mb-2">QTutor</h1>
        <p className="text-sm text-muted-foreground mb-6">Login to your student dashboard</p>
        <p className="text-sm text-muted-foreground py-8">
          Login system will be enabled once Cloud is set up with OTP authentication.
        </p>
        <Link to="/">
          <Button variant="hero-outline" size="lg" className="w-full">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
