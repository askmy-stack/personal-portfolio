import type { Certification } from "@/lib/types";

export const certifications: readonly Certification[] = [
  { name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services" },
  { name: "Google Advanced Data Analytics", issuer: "Google" },
  { name: "Google Business Intelligence", issuer: "Google" },
  { name: "Red Hat RHEL Automation with Ansible (RH294)", issuer: "Red Hat" },
  { name: "Red Hat System Administration II (RH134)", issuer: "Red Hat" },
] as const;
