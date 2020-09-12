import Link from "next/link";
import dynamic from "next/dynamic";

const PricingChart: any = dynamic(
  () =>
    import("../components/PricingChart").then((mod) => mod.PricingChart) as any,
  { ssr: false }
);

const RevenueChart: any = dynamic(
  () =>
    import("../components/RevenueChart").then((mod) => mod.RevenueChart) as any,
  { ssr: false }
);

const data24m = [
  { ["Monthly Sites Built"]: 1 },
  { ["Monthly Sites Built"]: 2 },
  { ["Monthly Sites Built"]: 3 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
]
  .map(({ ["Monthly Sites Built"]: sitesBuilt }, index) => ({
    month: index + 1,
    ["Monthly Sites Built"]: sitesBuilt,
    ["Monthly Support Plans Added"]: Math.round(
      (Math.random() * 0.5 + 0.5) * sitesBuilt
    ),
  }))
  .reduce(
    (
      { output, totalSitesBuilt, ["Total Support Plans"]: totalSupportPlans },
      elem
    ) => {
      const supportPlansLost = Math.round(
        Math.random() * 0.05 * totalSupportPlans
      );
      return {
        output: [
          ...output,
          {
            ...elem,
            totalSitesBuilt: totalSitesBuilt + elem["Monthly Sites Built"],
            ["Total Support Plans"]:
              totalSupportPlans +
              elem["Monthly Support Plans Added"] -
              supportPlansLost,
            ["Support Plans Lost"]: supportPlansLost,
          },
        ],
        totalSitesBuilt: totalSitesBuilt + elem["Monthly Sites Built"],
        ["Total Support Plans"]:
          totalSupportPlans +
          elem["Monthly Support Plans Added"] -
          supportPlansLost,
      };
    },
    {
      output: [],
      totalSitesBuilt: 0,
      ["Total Support Plans"]: 0,
    }
  ).output;

const revenue24mStrategy = [
  { ["Monthly Sites Built"]: 1 },
  { ["Monthly Sites Built"]: 2 },
  { ["Monthly Sites Built"]: 3 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 4 },
  { ["Monthly Sites Built"]: 5 },
]
  .map(({ ["Monthly Sites Built"]: sitesBuilt }, index) => ({
    month: index + 1,
    ["Monthly Sites Built"]: sitesBuilt,
    // ["Monthly Support Plans Added"]: Math.round(0.75 * sitesBuilt),
  }))
  .reduce(
    (
      { output, totalSitesBuilt, ["Total Support Plans"]: totalSupportPlans },
      elem
    ) => {
      const supportPlansLost = Math.round(0.025 * totalSupportPlans);
      return {
        output: [
          ...output,
          {
            ...elem,
            totalSitesBuilt: totalSitesBuilt + elem["Monthly Sites Built"],
            ["Monthly Support Plans Added"]:
              totalSupportPlans < 90
                ? Math.round(0.75 * elem["Monthly Sites Built"])
                : 0,
            ["Total Support Plans"]:
              totalSupportPlans +
              (totalSupportPlans < 90
                ? Math.round(0.75 * elem["Monthly Sites Built"])
                : 0) -
              supportPlansLost,
            ["Support Plans Lost"]: supportPlansLost,
          },
        ],
        totalSitesBuilt: totalSitesBuilt + elem["Monthly Sites Built"],
        ["Total Support Plans"]:
          totalSupportPlans +
          (totalSupportPlans < 90
            ? Math.round(0.75 * elem["Monthly Sites Built"])
            : 0) -
          supportPlansLost,
      };
    },
    {
      output: [],
      totalSitesBuilt: 0,
      ["Total Support Plans"]: 0,
    }
  )
  .output.map(
    ({
      month,
      ["Total Support Plans"]: totalSupportPlans,
      ["Monthly Sites Built"]: sitesBuilt,
    }) => ({
      month,
      ["Monthly Revenue"]:
        totalSupportPlans *
          (25 + (month > 15 ? Math.min(5 * (month - 16), 75) : 0)) +
        sitesBuilt *
          (1000 - (month > 20 ? Math.min(50 * (month - 20), 500) : 0)),
      ["Monthly Support Plan Revenue"]:
        totalSupportPlans *
        (25 + (month > 15 ? Math.min(5 * (month - 16), 75) : 0)),
      ["Monthly Site Building Revenue"]:
        sitesBuilt *
        (1000 - (month > 20 ? Math.min(50 * (month - 20), 500) : 0)),
    })
  );

const revenue24m = data24m.map(
  ({
    month,
    ["Total Support Plans"]: totalSupportPlans,
    ["Monthly Sites Built"]: sitesBuilt,
  }) => ({
    month,
    ["Monthly Revenue"]: totalSupportPlans * 50 + sitesBuilt * 500,
    ["Monthly Support Plan Revenue"]: totalSupportPlans * 50,
    ["Monthly Site Building Revenue"]: sitesBuilt * 500,
  })
);

const revenue24mFrontLoad = data24m.map(
  ({
    month,
    ["Total Support Plans"]: totalSupportPlans,
    ["Monthly Sites Built"]: sitesBuilt,
  }) => ({
    month,
    ["Monthly Revenue"]: totalSupportPlans * 50 + sitesBuilt * 1000,
    ["Monthly Support Plan Revenue"]: totalSupportPlans * 50,
    ["Monthly Site Building Revenue"]: sitesBuilt * 1000,
  })
);

const revenue24mBackLoad = data24m.map(
  ({
    month,
    ["Total Support Plans"]: totalSupportPlans,
    ["Monthly Sites Built"]: sitesBuilt,
  }) => ({
    month,
    ["Monthly Revenue"]: totalSupportPlans * 100 + sitesBuilt * 500,
    ["Monthly Support Plan Revenue"]: totalSupportPlans * 100,
    ["Monthly Site Building Revenue"]: sitesBuilt * 500,
  })
);

const data5y = [
  { ["Monthly Sites Built"]: 1 },
  { ["Monthly Sites Built"]: 2 },
  { ["Monthly Sites Built"]: 3 },
  { ["Monthly Sites Built"]: 5 },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
  { ["Monthly Sites Built"]: 3 + Math.round(Math.random() * 3) },
]
  .map(({ ["Monthly Sites Built"]: sitesBuilt }, index) => ({
    month: index + 1,
    ["Monthly Sites Built"]: sitesBuilt,
    ["Monthly Support Plans Added"]: Math.round(
      (Math.random() * 0.5 + 0.5) * sitesBuilt
    ),
  }))
  .reduce(
    (
      { output, totalSitesBuilt, ["Total Support Plans"]: totalSupportPlans },
      elem
    ) => {
      const supportPlansLost = Math.round(
        Math.random() * 0.05 * totalSupportPlans
      );
      return {
        output: [
          ...output,
          {
            ...elem,
            totalSitesBuilt: totalSitesBuilt + elem["Monthly Sites Built"],
            ["Total Support Plans"]:
              totalSupportPlans +
              elem["Monthly Support Plans Added"] -
              supportPlansLost,
            ["Support Plans Lost"]: supportPlansLost,
          },
        ],
        totalSitesBuilt: totalSitesBuilt + elem["Monthly Sites Built"],
        ["Total Support Plans"]:
          totalSupportPlans +
          elem["Monthly Support Plans Added"] -
          supportPlansLost,
      };
    },
    {
      output: [],
      totalSitesBuilt: 0,
      ["Total Support Plans"]: 0,
    }
  ).output;

const revenue5y = data5y.map(
  ({
    month,
    ["Total Support Plans"]: totalSupportPlans,
    ["Monthly Sites Built"]: sitesBuilt,
  }) => ({
    month,
    ["Monthly Revenue"]: totalSupportPlans * 50 + sitesBuilt * 500,
    ["Monthly Support Plan Revenue"]: totalSupportPlans * 50,
    ["Monthly Site Building Revenue"]: sitesBuilt * 500,
  })
);

const revenue5yFrontLoad = data5y.map(
  ({
    month,
    ["Total Support Plans"]: totalSupportPlans,
    ["Monthly Sites Built"]: sitesBuilt,
  }) => ({
    month,
    ["Monthly Revenue"]: totalSupportPlans * 50 + sitesBuilt * 1000,
    ["Monthly Support Plan Revenue"]: totalSupportPlans * 50,
    ["Monthly Site Building Revenue"]: sitesBuilt * 1000,
  })
);

const revenue5yBackLoad = data5y.map(
  ({
    month,
    ["Total Support Plans"]: totalSupportPlans,
    ["Monthly Sites Built"]: sitesBuilt,
  }) => ({
    month,
    ["Monthly Revenue"]: totalSupportPlans * 100 + sitesBuilt * 500,
    ["Monthly Support Plan Revenue"]: totalSupportPlans * 100,
    ["Monthly Site Building Revenue"]: sitesBuilt * 500,
  })
);

function BusinessPlan() {
  return (
    <div className="px-4 py-16 mx-auto prose-sm sm:max-w-5xl sm:prose">
      <h1>Authorize Business Plan</h1>
      <h2>Table of Contents</h2>
      <ul className="list-disc list-inside sm:list-none">
        <li>
          <Link href="/business-plan#the-problem">
            <a>The Problem</a>
          </Link>
        </li>
        <li>
          <Link href="/business-plan#the-solution">
            <a>The Solution</a>
          </Link>
        </li>
        <li>
          <Link href="/business-plan#pricing">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/business-plan#the-market">
            <a>The Market</a>
          </Link>
        </li>
        <li>
          <Link href="/business-plan#upkeep">
            <a>Upkeep</a>
          </Link>
        </li>
      </ul>
      <h2 id="the-problem">The Problem</h2>
      <p>
        Authors are taught from day one to build their websites using Wordpress.
        Why? Well, everyone does it, it's (sort of) editable without help from a
        software engineer, everyone does it, you can hire someone to set you up
        with a decent theme fairly cheaply, and everyone does it. Unfortunately,
        Wordpress is not without problems.
      </p>
      <p>
        It's a PHP framework meaning it renders pages on the server at request
        time rather than build time. This means one has to pay for and, more
        importantly, maintain a server. Additionally, as a result of not
        generating pages at build time, Wordpress sites can't be hosted on a
        CDN. This means slow load times by modern standards, and for popular
        sites, high hosting costs.
      </p>
      <p>
        The other big problem with Wordpress is its Plugin system. Plugins are
        like cookies. One or two is a nice treat. 10 or 15 is a stomach ache
        waiting to happen. Over the life-span of their website, an author will
        often add many plugins. Each adds complexity to the author's editing
        experience and requires clients to download yet more code making an
        already slow site that much slower. Not to mention some plugins are
        incompatible with some themes leading to hard to diagnose bugs.
      </p>
      <p>
        Put simply, author websites use an old framework, Wordpress, that is
        less than ideal for their usecase and lets them shoot themselves in the
        foot via a tempting plugin system.
      </p>
      <h2 id="the-solution">The Solution</h2>
      <p>
        The solution is, unsurprisingly, Authorize. Authorize sites are built
        using a client-side first framework backed by a headless CMS which is
        then server-side rendered at build-time and hosted on a CDN.
      </p>
      <p>
        That's a lot of words, so lets break it down. Unlike Wordpress,
        Authorize sites are <strong>client-side first</strong>. In other words,
        anything they <em>can</em> do on the client they <em>do</em> do on the
        client. So, unlike server-side first (Wordpress) sites that go back to
        the server for each page navigation, client-side first sites download
        the code for all navigations before hand and simply simulate the page
        navigation on the client. This means no extra network requests and near
        instant page navigations.
      </p>
      <p>
        Client-side first sites (sometimes called SPAs) have some problems
        though. One of these problems is that they don't come with contentful
        markdown meaning they have horrible SEO. This brings us to our second
        keyword, <strong>server-side rendering</strong>. Basically, to ensure
        Authorize sites have good SEO I need to do their initial render on the
        server to build that contentful markdown then I can just let them act
        like normal SPAs for subsequent page navigations.
      </p>
      <p>
        Now, yet again, server-side rendering solves some problems while
        creating new ones. Specifically, server-side rendering
        requires&mdash;get this&mdash;a server. Because I want to host Authorize
        sites on a CDN this is a non-starter. I can get around this with our
        third keyword, <strong>build-time rendering</strong>.
      </p>
      <p>
        Basically, instead of server-side rendering each request at request-time
        I just simulate all possible requests at build-time then store the built
        markdown as a collection of static files. On the surface this sounds a
        bit crazy. After all, how can I simulate <em>every</em> possible request
        at build-time. The solution is quite elegant though. I just need to list
        all the valid requests (e.g. all the pages of the site) and render those
        requests then render one page for all the invalid requests.
      </p>
      <p>
        Yet again I've solved a problem, but this time I haven't introduced any
        new ones. In fact, build-time rendering solves the second big problem of
        SPAs that I haven't even mentioned yet, slow initial loads. Basically,
        SPAs will naively download the JavaScript for the entire site on the
        initial load. This is problematic because browsers can't run any code
        from a script before they download the entire script. So, this extra
        code delays the initial page load quite a bit despite most of the
        downloaded code not being necessary for the intial page load.
      </p>
      <p>
        Build-time rendering solves this by having the build service note what
        code is required for each page it builds then spliting the site's
        codebase into a bunch of little scripts scoped to each page (this is
        often termed <q>code splitting</q>). This way each page will only load
        the code required for itself initially. Then, in the background, it will
        preload the code for other pages. This background preloading preserves
        the instant page navigations I noted earlier.
      </p>
      <p>
        Now, the final keyword, <strong>headless CMS</strong>. One thing I've
        neatly avoided discussing is the content of the site. After all, if each
        author was comfortable programminging they could simply edit their
        site's codebase whenever they wanted to add new content. Unfortunately
        (or fortunately since it's the crux of my business plan), authors won't
        touch code with a 10 foot pole.
      </p>
      <p>
        Authorize solves this with a headless CMS. Basically, I give clients a
        Wordpress like UI called a headless CMS in which to add their book,
        series, and static page content. Then that headless CMS, on save, calls
        a webhook from the build service to trigger a rebuild of the site. This
        build service, gathers all the data from the CMS via an API (it's
        headless because it just exposes an API rather than a full website, aka
        a head), and rebuilds any pages whose underlying data have changed from
        the last build.
      </p>
      <p>
        Now, Authorize could roll a headless CMS from scratch, but why do what
        someone else can do better for cheaper? Instead of building a custom
        headless CMS I'll just set clients up with pre-configured account from a
        managed headless CMS service (currently this is{" "}
        <a href="" target="_blank" rel="noopener">
          Contenful
        </a>{" "}
        though this is not set in stone). Something important to note here is
        that author sites have next to zero content in the grand scheme of
        things. Even the most prolific authors write on the order of 100s of
        books, and that's barely a drop in the bucket for most hosted CMS
        services. So, the vast majority of clients won't have to pay a dime for
        their CMS since they'll fall well within the free plan's limits.
      </p>
      <p>
        So, to summarize, because Authorize sites are server-side rendered at
        build-time they can be hosted on a CDN making their initial load times
        super fast and their markdown SEO friendly. Because they use a
        client-side framework instead of a server-side framework subsequent page
        navigations don't require a network connection making them almost
        instant, and by setting authors up with a managed headless CMS they get
        an easy editing experience.
      </p>
      <p>
        The above would be a perfectly good solution on its own, but I think
        Authorize has one more value-add, its lack of plugins. Now, authors can,
        of course, ask for custom features to be built out for them should they
        want them, and I'll be happy to build them (at a reasonable hourly rate
        of course). This is different than a plugin though. Because all the
        features of the site are in the same codebase, code duplication is
        reduced, and I can maintain a consistent editing experience for the
        author.
      </p>
      <p>
        Speaking of features, this wouldn't be a complete section without
        listing what authors actually get with an Authorize site. Out of the box
        Authorize sites will come with all the features the average author could
        want. They can edit the content of their <em>home</em> and{" "}
        <em>about me</em> pages, and can add/edit/remove books, series, and
        literary universes easily via their headless CMS. Each,
        book/series/universe supports all the expected things: buy links, tag
        lines, descriptions, covers, splash art, recommendations, etc. But
        that's just the simple stuff. Authorize sites also come with newsletter
        sign-up integration for any service under the sun (if they use a service
        I don't already support I'll write the necessary adapter), contact form
        support (e.g. I'll programatically email them form submissions), book
        carousels, and referral link building (e.g. put in your affiliate code
        once and let the site build your referral links for you).
      </p>
      <p>
        The only big missing feature that a lot of authors will want is a
        built-in blog. This is completely doable, but I think because of the
        expanded scope I'll likely charge this as an optional add-on which
        brings us to the topic of pricing. This isn't worked out yet. So, that's
        all I'll say about it in the business plan.
      </p>
      <h2 id="pricing">Pricing</h2>
      <p>
        Authorize will make its money in two ways. One, up front payments for
        building sites. I'll only spend a hand-full of hours on most sites
        changing vanity things like color palettes, page titles, etc. The rest
        of the time will be spent migrating the author's old site's data over to
        their new site. This means that up front pricing will differ from author
        to author. My estimatation for this has changed based on some revenue
        modeling you'll see in a moment, but I started with $500 per author on
        average.
        {/* This equates to a low hourly rate because Authorize will make
        most of its profits off of its monthly support plans. Site building will
        be more of a customer acquisition channel than a profit center. */}
      </p>
      <p>
        Authorize's monthly support plans will involve hosting authors' websites
        (note this isn't a generic hosting service) on a CDN, and providing a
        limited number of free technical support hours every month (currently
        targetting 2 hours per month). Basically, subscribers get to completely
        offload the complexity of maintaining their website to me. If something
        breaks, I'll fix it. If they need help doing something, I'll help walk
        them through it. My initial pricing for this subscription was $50 per
        month.
      </p>
      <p>
        The beauty of this pricing strategy is that if I build a good site
        that's intuitive to edit and doesn't have bugs, the monthly support time
        will go underutilized, and with Authorize sites being hosted on a CDN,
        hosting will be nearly free. This means margins on support plans could
        be very high so long as my initial product is of a high quality.
      </p>
      <p>
        The obvious question is what do I do with those that don't want the
        support plan or end up cancelling it. For authors who don't want the
        support plan from the start I'll simply charge a higher hourly rate for
        building the site (probably in the $40/hour range) and send them on
        their way with a detailed guide on what they have and how they can host
        it on their own. For authors that cancel their support plan, I'll, of
        course, try to get them to stay, but should they, leave they'll get the
        same thing.
      </p>
      <p>
        Importantly, because I'm not using Wordpress the support plan will be
        very sticky since most author's don't know how to host a non-Wordpress
        site, and even fewer could successfully host a site on a CDN (despite it
        being technically easier). This is a nice moat for the business, but it
        will have to be made clear to all clients up front to avoid problems
        down the line.
      </p>
      <p>
        Now, with these numbers, I've worked out a basic model of what it would
        take to completely support myself off of this business in 2 years time.
      </p>
      <PricingChart data={data24m} />
      <p>
        This is a randomized simulation so each run will be slightly different
        (try reloading if you're curious), but by the Law of Large Numbers,
        after 24 months, if my assumptions are correct, I'll be at around 60
        support plans and ~4.5 client websites a month.
      </p>
      <p>
        Now, assuming $50 per month per support plan and $500 per site on
        average, I can plot what this will look like in terms of revenue.
      </p>
      <RevenueChart data={revenue24m} />
      <p>
        Generally speaking, good. I wouldn't be rich by any measure, but I'd be
        able to live off of that, and the trendlines are in the right direction.
        Now, the next question is where does this top off. After, all{" "}
        <strong>I</strong> might be willing to work for ~$55k a year, but it'd
        be difficult to find a solid software engineer to bring on as employee
        number one at that kind of salary.
      </p>
      <p>
        So, the question is, what would the revenue per employee look like at
        scale? To find this out I just need to project out longer, way longer.
      </p>
      <PricingChart data={data5y} />
      <p>
        It's a bit hard to read, but you'll notice total support plans levels
        off at around 130. This is the point where the number of cancelations
        each month is roughly equal to the number of new support plans added.
        It's worth noting that I estimated the cancelation rate at ~2.5% each
        month to be conservative, but I'd be shooting for a much lower number.
        Unfortunately, as you'll see in a bit, this equilibrium is considerably
        higher than my real limit since it doesn't account for how long one
        would have to work every day to maintain this client base. Anyways, if
        we plug that into our revenue model we get this:
      </p>
      <RevenueChart data={revenue5y} />
      <p>
        So, about $9,000 per month, or $100,000 per year. If we assume a solid
        engineer in MN (where I currently live) is $75k/year that's good news.
        Of course, this all assumes the bottleneck is support plan churn and not
        the number of support plans one software engineer can handle on-top of
        their monthly ~4.5 website builds.
      </p>
      <p>
        Doing the math, assuming each support plan is 25% utilized on average,
        meaning 0.5 hours of work per month per support plan, and 25 hours of
        work per site built that leaves us with 60 hours a month per employee or
        about 120 support plans.
      </p>
      <p>
        That means that, with low support plan utilization, revenue per employee
        can easily outstrip an average employee salary. Of course, this requires
        low support utilization. If one runs the same numbers at 75% utilization
        it maxes out at 40 support plans per employee which is too low to
        support an employee's salary.
      </p>
      <p>
        So, the trick is to keep support utilization low, but there's another
        lever I can pull. If I can streamline site builds by off-loading site
        migration (basic data entry) to contractors. I can reduce engineering
        time to about 5 hours per site for relatively little since data entry
        contractors are way cheaper than software engineers. Rerunning the
        numbers that leaves engineers with 140 hours per month for support.
        Which, even at 75% utilization, is 93 support plans per engineer or
        about $83k per year per engineer which is a workable revenue per
        employee number.
      </p>
      <p>
        Finally, it's worth looking at a sensitivity analysis for both up front
        pricing and monthly pricing. That is, how does a change in either of my
        price points effect my predicted revenue. Note: this doesn't say
        anything about what the market will can bear at different price points,
        only what different price points would equate to in revenue should the
        market bear them all equally.
      </p>
      <p>
        First, let's do $1,000 per website on average or double my initial
        price. This is about market average for a semi-custom Wordpress site.
      </p>
      <RevenueChart data={revenue24mFrontLoad} />
      <p>
        Unsurprisingly that leaves me at a higher monthly revenue after 24
        months of about $7,000 per month or $84k per year. What's interesting is
        it also pushes me to a reasonable personal income within 4 months of
        starting since, even without a dime of support plan money, $1,000 per
        website at ~4.5 websites per month is $54k per year.
      </p>
      <p>Now, if we run this on our asymptotic data we get this:</p>
      <RevenueChart data={revenue5yFrontLoad} />
      <p>
        Revenue tops off at around $10,500 per month or $125,000 per year. That
        is, of course, higher than the original estimate (by about 25%), but not
        incredibly so. This is due to support plan revenue becoming more
        important as the base of support plans grows. Interestingly, this effect
        only really appears many years into the simulation meaning the early
        adavantages of a higher up front price aren't as short lived as I would
        have thought.
      </p>
      <p>
        Now, let's look at a similar doubling of price, but for the monthly
        pricing instead. That gives us this:
      </p>
      <RevenueChart data={revenue24mBackLoad} />
      <p>And when we run it on the asymptotic data:</p>
      <RevenueChart data={revenue5yBackLoad} />
      <p>
        What's interesting is that this doubling in price leads to a higher
        monthly revenue by only the 14th month (give or take a few), and in the
        long term it leads to a considerably higher $15,000 per month of revenue
        or $180,000 per year (an ~80% increase).
      </p>
      <p>
        So, what are the take aways? Well, it looks like I should be charging
        more up front initially then shifting to a higher monthly price and
        lower up front price later on (somewhere around 16 months seems about
        right). Of course, this ignores some problems. For one, bootstrapping a
        customer base in a market that is primarily word of mouth based will
        require discounts early on meaning the higher up front pricing doesn't
        make a whole lot of sense. Also, because raising monthly pricing on
        existing customers will lead to massive cancelations I'll probably have
        to limit myself to only raising prices for new support plans meaning the
        effects of a higher support plan price won't be as pronounced.
      </p>
      <p>
        Taking all this into account, I still think my revised pricing strategy
        can work. The plan (before contact with the enemy) is to charge $1,000
        per site and $25 per month for the first 16 months then assuming my
        predictions hold (which I'm sure they won't) I'll start raising the
        monthly price in $5 incremenents each month for 15 months ending at 100
        per month on month 31. Additionally, I'll start lowering the up front
        price in $50 increments each month starting on month 21 and ending on
        month 31. This all assumes the market can bear at least 1 person's full
        work-load at these prices. Based on some basic research I think this is
        a reasonable assumption. So, with this plan in place here's what my
        revenue projection looks (this one is not randomized):
      </p>
      <RevenueChart data={revenue24mStrategy} />
      <h2 id="the-market">The Market</h2>
      <p>
        With my pricing worked out it's now worth looking at my customers. While
        my pricing strategy works for a wide range of customers. One of the
        biggest factors in my long-term success will be my support plan
        attrition rate. That is, how long, on average, will a support plan last.
        This value, along with my up front pricing, determines my client
        lifetime value (CLV).
      </p>
      <p>
        Because I want to optimize my CLV, I will be targeting mid-list authors.
        As I see it there are three breeds of authors. Beginners, mid-list, and
        a-list. Beginners will naturally have high attrition rates since many
        will simply stop writing. So, even if they're in my pricing band, I'll
        generally try to avoid them. A-list authors are sure to be the most
        stable, but they're likely to just hire a software engineer to build and
        maintain a completely custom site. That's a high margin niche, but it's
        not my niche.
      </p>
      <p>
        Mid-list authors are authors who make a living off of writing, but
        aren't widely successful. They're likely to stick around for a while
        since writing is a job rather than a hobby for them, and they're a
        sizeable cohort meaning I shouldn't have to worry about depleting the
        market.
      </p>
      <p>
        I'll be further segmenting my market by targeting indie-authors over
        traditionally published authors. This is primarily because indie authors
        maintain more control over their own web presence and can therefore be
        marketed to directly.
      </p>
      <p>
        With all this in mind, I expect the my total addressable market (TAM) of
        indie mid-list authors is upwards of 10,000 individuals. If I take a
        shot in the dark guess at an average customer lifetime of 2.5 years that
        leads to an average CLV of about $3,500 which in turn gives me a TAM
        dollar amount of about $35,000,000 which is plenty large for my
        purposes.
      </p>
      <h2 id="upkeep">Upkeep</h2>
      <p>
        The final question is upkeep. While I intend for Authorize to be wildly
        successful, if it's not I can easily get stuck in a hard place. After
        all, if I can't or no longer want to support myself off of Authorize's
        revenue I'll be hanging any current clients out to dry.
      </p>
      <p>
        The primary problem is that Authorize sites aren't built using Wordpress
        so they aren't as easy to self host. To ameliorate this I'll do two
        things.
      </p>
      <p>
        First, I'll ensure I have a detailed guide about how to self-host an
        Authorize site that which I'll give to anyone I part ways with. It will
        give general hosting info, but also a step-by-step guide for the
        services I use to host the sites. The idea being that they can
        completely duplicate my deployment setup.
      </p>
      <p>
        Second, I'll give strict assured support period estimates to everyone I
        work with. That is, I'll tell them exactly how long I'll commit to
        maintaining a paid support program. If things are going well this
        timeline can be extends indefinitely, but if things take a turn for the
        worst, then I'm only chained to the project for a set period of time.
      </p>
      <p>
        These aren't perfect solutions, and no matter what, shutting down while
        I had clients on my books would be a messy process. However, I think
        these mitigations should temper the worst of the problems.
      </p>
      <p>
        Finally, there's the possibility of partnering with a larger company in
        the space to ensure that support continues on for clients who want it
        even if my company isn't a success. This is an ideal solution, but it
        remains to be seen if any companies in the space will be willing to take
        on the risk until Authorize is more established.
      </p>
    </div>
  );
}

export default BusinessPlan;
