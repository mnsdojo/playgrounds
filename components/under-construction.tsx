import { Wrench } from "lucide-react";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 p-4 text-center">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
          🚧 Under Construction 🚧
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Until then, watch these stupid icons rotate weeee
        </p>
        <div className="flex justify-center space-x-4">
          <Wrench className="h-8 w-8 text-gray-400 animate-spin" />
          <Wrench
            className="h-8 w-8 text-gray-500 animate-spin"
            style={{ animationDelay: "0.2s" }}
          />
          <Wrench
            className="h-8 w-8 text-gray-600 animate-spin"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}
