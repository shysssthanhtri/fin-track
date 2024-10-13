import Head from "next/head";

import { PageTemplate } from "@/components/templates/page-template";
import { Metadata } from "@/config/metadata";

export default function Home() {
  return (
    <>
      <Head>
        <title>{Metadata.title.home}</title>
        <meta name="description" content={Metadata.description} />
      </Head>
      <PageTemplate>Hello</PageTemplate>
    </>
  );
}
