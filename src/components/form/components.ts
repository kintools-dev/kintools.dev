import { Button } from "#/components/shared/Button.tsx";
import { Card } from "#/components/shared/Card.tsx";
import { CodeGroup } from "#/components/shared/CodeGroup.tsx";
import { CodeGroupItem } from "#/components/shared/CodeGroupItem.tsx";
import { Container } from "#/components/shared/Container.tsx";
import { Cta } from "#/components/shared/Cta.tsx";
import { FrameworkSlot } from "#/components/shared/FrameworkSlot.tsx";
import { FrameworkText } from "#/components/shared/FrameworkText.tsx";
import { Grid } from "#/components/shared/Grid.tsx";
import { Hero } from "#/components/shared/Hero.tsx";
import { Home } from "#/components/shared/Home.tsx";
import { Lede } from "#/components/shared/Lede.tsx";
import { Principle } from "#/components/shared/Principle.tsx";
import { Prose } from "#/components/shared/Prose.tsx";
import { Section } from "#/components/shared/Section.tsx";
import { SectionHeader } from "#/components/shared/SectionHeader.tsx";
import { SideBySide } from "#/components/shared/SideBySide.tsx";
import {
  TreeCaption,
  TreeDiagram,
  TreeEdge,
  TreeNode,
} from "#/components/shared/TreeDiagram.tsx";
import { ApiSurfaceMatrix } from "./ApiSurfaceMatrix.tsx";
import { BundleSizeChart } from "./BundleSizeChart.tsx";
import { FeatureMatrix } from "./FeatureMatrix.tsx";
import { PerformanceCharts } from "./PerformanceCharts.tsx";
import { PerformanceHighlight } from "./PerformanceHighlight.tsx";

// Resolves every custom tag invoked directly in form/docs's markdown.
export const formComponents = {
  Container,
  CodeGroup,
  CodeGroupItem,
  SideBySide,
  ApiSurfaceMatrix,
  BundleSizeChart,
  FeatureMatrix,
  FrameworkSlot,
  FrameworkText,
  PerformanceCharts,
  PerformanceHighlight,
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
  TreeDiagram,
  TreeEdge,
  TreeNode,
  TreeCaption,
};
