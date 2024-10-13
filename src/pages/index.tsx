import Head from "next/head";

import { AddTransactionCard } from "@/components/molecules/add-transaction-card";
import { PageTemplate } from "@/components/templates/page-template";
import { Metadata } from "@/config/metadata";

export default function Home() {
  return (
    <>
      <Head>
        <title>{Metadata.title.home}</title>
        <meta name="description" content={Metadata.description} />
      </Head>
      <PageTemplate className="flex flex-col-reverse gap-4 sm:flex-row">
        <div className="flex-1 bg-red-50">Left</div>
        <div className="flex-1">
          <AddTransactionCard />
        </div>
      </PageTemplate>
    </>
  );
}
