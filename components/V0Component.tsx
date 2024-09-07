/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6XmVV1ud3OJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from 'next/image';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="mailto:kai.jarmon@gmail.com" prefetch={false}>
          <h2 className="text-xl font-bold">Kai Jarmon</h2>
          <span className="sr-only">Kai's Portfolio</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/kai-jarmon-18a370130/"
            target="_blank"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/JarmonKai14"
            target="_blank"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Twitter
          </Link>
          <Link
            href="mailto:kai.jarmon@gmail.com"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6 mx-auto flex justify-center">
            <div className="max-w-2xl flex flex-col items-center text-center space-y-4">
              <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tighter space-y-2">
                <div>Hi, I'm Kai.</div>
                <div>Here's why I'd be a great fit at Vercel.</div>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium flex items-center gap-2 mt-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 19.7778H22L12 2Z" fill="currentColor"/>
                </svg>
                This site was built with v0.dev
              </h2>
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="mailto:kai.jarmon@gmail.com"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group"
                  prefetch={false}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 group-hover:animate-shimmer" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto flex justify-center">
            <div className="max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hey Vercel team, I'm Kai Jarmon, a dedicated user and fan of Vercel's technology, eager to join your sales team. I've used Vercel to iterate and deploy products for my startup, PreSnap, which I've been bootstrapping since 2019 during my time as a student-athlete at the University of Texas, where I studied UX design.
                <br /><br />
                I'm extremely passionate about creating amazing user experiences and I want to help the world build a more beautiful web experience with Vercel.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto flex justify-center">
            <div className="max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Background</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A quick video on my background and why I'd be able to contribute at Vercel.
              </p>
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1005311732?autoplay=0"
                  frameBorder="0"
                  allow="fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto flex justify-center">
            <div className="max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How I've Used Vercel</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At PreSnap, we aimed to build one of the best user experiences for football coaches, so naturally, we built our products with Next.js. Since we're a small team, deploying our products on Vercel helped us ship our products quickly and at scale. As the product designer, I used Preview Deployments along with Vercel's Slack integration to communicate changes with our engineers.
              </p>
              <Image
                src="/presnapimage.png"
                width={550}
                height={310}
                alt="PreSnap Vercel Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                unoptimized
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto flex justify-center">
            <div className="max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Vercel Marketing Video</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I created a sample intro video for Vercel to showcase how I use custom content to connect with prospects.
              </p>
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1005302476?autoplay=0"
                  frameBorder="0"
                  allow="fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl mx-auto flex items-center justify-center">
          <Link href="mailto:kai.jarmon@gmail.com" className="text-muted-foreground hover:underline underline-offset-4" prefetch={false}>
            kai.jarmon@gmail.com
          </Link>
        </div>
      </footer>
    </div>
  )
}