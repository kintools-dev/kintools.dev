import { Button } from "#/components/shared/Button.tsx";
import { Card } from "#/components/shared/Card.tsx";
import { CodeGroup } from "#/components/shared/CodeGroup.tsx";
import { CodeGroupItem } from "#/components/shared/CodeGroupItem.tsx";
import { Container } from "#/components/shared/Container.tsx";
import { Cta } from "#/components/shared/Cta.tsx";
import { Grid } from "#/components/shared/Grid.tsx";
import { Hero } from "#/components/shared/Hero.tsx";
import { Home } from "#/components/shared/Home.tsx";
import { Lede } from "#/components/shared/Lede.tsx";
import { Primitive } from "#/components/shared/Primitive.tsx";
import { Principle } from "#/components/shared/Principle.tsx";
import { Prose } from "#/components/shared/Prose.tsx";
import { Section } from "#/components/shared/Section.tsx";
import { SectionHeader } from "#/components/shared/SectionHeader.tsx";
import { SideBySide } from "#/components/shared/SideBySide.tsx";
import { FeatureMatrix } from "./FeatureMatrix.tsx";

// Resolves every custom tag invoked directly in store/docs's markdown.
// store/docs has no chart/framework-switcher components -- form only.
export const storeComponents = {
  Container,
  CodeGroup,
  CodeGroupItem,
  SideBySide,
  FeatureMatrix,
  Home,
  Hero,
  Section,
  SectionHeader,
  Button,
  Card,
  Grid,
  Lede,
  Prose,
  Cta,
  Principle,
  Primitive,
};
