import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Go"];

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Code, Practice, Excel
                <span className="text-primary"> on Playgrounds</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Your browser is now your IDE. Practice coding in multiple
                languages, solve challenges, and sharpen your skills - all in
                one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Start Coding Now
                <Code className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Challenges
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Supported Languages:
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <Badge key={lang} variant="secondary">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-[500px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Coding Playground Illustration"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary flex items-center justify-center">
                <Terminal className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
