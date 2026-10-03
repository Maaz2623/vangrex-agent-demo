"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";

export const AuthForm = () => {
  const handleGoogleSignIn = () => {
    authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex min-h-[calc(100vh-2rem)] w-full items-center justify-center p-4 sm:p-6">
      <Card className="w-full max-w-sm sm:max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-xl sm:text-2xl">
            Welcome to Vangrex
          </CardTitle>

          <CardDescription className="text-sm">
            Continue with your Google account to get started.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full"
            onClick={handleGoogleSignIn}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="mr-2 size-4">
              <path
                fill="currentColor"
                d="M21.35 12.23c0-.79-.07-1.55-.22-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
              />
              <path
                fill="currentColor"
                d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.5Z"
              />
              <path
                fill="currentColor"
                d="M6.54 13.59a5.86 5.86 0 0 1 0-3.18V7.88H3.3a9.74 9.74 0 0 0 0 8.24l3.24-2.53Z"
              />
              <path
                fill="currentColor"
                d="M12 6.38c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.41 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.7 5.38l3.24 2.53C7.31 8.1 9.46 6.38 12 6.38Z"
              />
            </svg>
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
