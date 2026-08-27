import { createFileRoute } from "@tanstack/react-router";
import { DocsFooter } from "#/components/DocsFooter.tsx";
import { Button } from "#/components/shared/Button.tsx";
import { Card } from "#/components/shared/Card.tsx";
import { Grid } from "#/components/shared/Grid.tsx";
import { Hero } from "#/components/shared/Hero.tsx";
import { Home } from "#/components/shared/Home.tsx";
import { IconSvg } from "#/components/shared/IconSvg.tsx";
import { LibraryCard } from "#/components/shared/LibraryCard.tsx";
import { Principle } from "#/components/shared/Principle.tsx";
import { Section } from "#/components/shared/Section.tsx";
import { SectionHeader } from "#/components/shared/SectionHeader.tsx";
import { libraries } from "#/content/libraries.ts";
import { seoHead } from "#/lib/seo.ts";

const description =
  "Composable, framework-agnostic TypeScript libraries. Zero dependencies, full type inference, no vendor lock-in.";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "kintools",
      description,
      path: "/",
    }),
  component: IndexPage,
});

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <IconSvg className={className}>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </IconSvg>
  );
}

function MinimizeIcon({ className }: { className?: string }) {
  return (
    <IconSvg className={className}>
      <path d="M9 4v4a1 1 0 0 1-1 1H4" />
      <path d="M20 9h-4a1 1 0 0 1-1-1V4" />
      <path d="M4 15h4a1 1 0 0 1 1 1v4" />
      <path d="M15 20v-4a1 1 0 0 1 1-1h4" />
    </IconSvg>
  );
}

function UnlockIcon({ className }: { className?: string }) {
  return (
    <IconSvg className={className}>
      <path d="M6 10V7a6 6 0 0 1 10.5-4" />
      <rect x="4" y="10" width="14" height="10" rx="2" />
      <path d="M11 15v2" />
    </IconSvg>
  );
}

function SlidersIcon({ className }: { className?: string }) {
  return (
    <IconSvg className={className}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <circle cx="9" cy="6" r="2" fill="currentColor" stroke="none" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="11" cy="18" r="2" fill="currentColor" stroke="none" />
    </IconSvg>
  );
}

// The kintools mark: a lean core with one incomplete ring around it -- the
// gap is the point, nothing orbits until a plugin/binding/validator earns
// its place. See the "Orbit" concept: https://claude.ai/code/artifact/ae6cd4c6-78de-43a7-8ad1-0cc65036d834
function OrbitMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M 23.72 6.81 A 12 12 0 1 1 4.18 13.91"
        fill="none"
        stroke="var(--color-brand2)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="5" fill="var(--color-brand1)" />
    </svg>
  );
}

function IndexPage() {
  return (
    <>
      <Home>
        <Hero
          className="relative"
          icon={<OrbitMark className="h-10 w-10 sm:h-14 sm:w-14" />}
          title="kintools"
          lede="Framework-agnostic TypeScript libraries."
        >
          <div aria-hidden className="hero-glow" />
          <Button href="#libraries">Browse libraries</Button>
          <Button
            href="https://github.com/kintools-dev"
            variant="secondary"
            external
          >
            GitHub
          </Button>
        </Hero>

        <Section>
          <SectionHeader>Why kintools</SectionHeader>
          <Grid cols={2}>
            <Card className="reveal-on-scroll transition-shadow hover:shadow-popover">
              <Principle
                icon={<MinimizeIcon className="h-5 w-5" />}
                title="Lean and fast"
              >
                Zero dependencies, checked bundle-size numbers, no dead weight.
              </Principle>
            </Card>
            <Card className="reveal-on-scroll transition-shadow hover:shadow-popover">
              <Principle
                icon={<ShieldCheckIcon className="h-5 w-5" />}
                title="Type-safe by design"
              >
                Paths and values are inferred from your data, not annotated by
                hand.
              </Principle>
            </Card>
            <Card className="reveal-on-scroll transition-shadow hover:shadow-popover">
              <Principle
                icon={<SlidersIcon className="h-5 w-5" />}
                title="Opt-in complexity"
              >
                Start with the plain primitive. Extra features are there when
                you reach for them, not before.
              </Principle>
            </Card>
            <Card className="reveal-on-scroll transition-shadow hover:shadow-popover">
              <Principle
                icon={<UnlockIcon className="h-5 w-5" />}
                title="No vendor lock-in"
              >
                MIT licensed, free forever. No paywalled tier to migrate away
                from.
              </Principle>
            </Card>
          </Grid>
        </Section>

        <Section id="libraries">
          <SectionHeader>Libraries</SectionHeader>
          <Grid cols={2}>
            {libraries.map((library) => (
              <LibraryCard key={library.id} library={library} />
            ))}
          </Grid>
        </Section>
      </Home>

      <DocsFooter />
    </>
  );
}
