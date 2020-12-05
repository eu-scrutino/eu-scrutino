const companiesColumns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    {
        id: 'funding',
        label: 'Funding',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'inceptionDate', label: 'InceptionDate', minWidth: 170 },
    { id: 'business', label: 'Business', minWidth: 170 },
    { id: 'status', label: 'Status', minWidth: 170 },
]

const companies = [
    {
        id: '7210b706-8273-4e18-96b0-d69c6fade0d5',
        name: 'Kilback, Heller and Swift',
        funding: '22.00',
        inceptionDate: '2020-03-02T00:09:45.388Z',
        business: 'morph 24/365 synergies',
        status: 'ACTIVE',
    },
    {
        id: '72667546-ce9f-43f0-8bff-74c6a1ab267d',
        name: 'Emmerich, Dach and Lind',
        funding: '367.00',
        inceptionDate: '2019-10-30T10:26:56.485Z',
        business: 'unleash 24/365 bandwidth',
        status: 'ACTIVE',
    },
    {
        id: 'df38b094-e029-4581-95ce-c9a4b834eea6',
        name: 'Roberts, Beer and Marvin',
        funding: '398.00',
        inceptionDate: '2020-04-06T09:19:40.679Z',
        business: 'monetize B2B channels',
        status: 'ACTIVE',
    },
    {
        id: 'da7ae402-d597-422c-9d63-f49749047ad8',
        name: 'Sporer Inc',
        funding: '245.00',
        inceptionDate: '2020-01-28T05:16:23.418Z',
        business: 'innovate back-end functionalities',
        status: 'ACTIVE',
    },
    {
        id: '28a00d2b-9e4f-4ec8-ba27-0c47b8026993',
        name: 'Kihn Inc',
        funding: '754.00',
        inceptionDate: '2020-07-23T10:07:50.680Z',
        business: 'optimize extensible experiences',
        status: 'ACTIVE',
    },
    {
        id: '90b2792c-650a-4965-a117-6fd55eb6ea88',
        name: 'Beier LLC',
        funding: '701.00',
        inceptionDate: '2020-03-12T23:27:25.479Z',
        business: 'embrace ubiquitous interfaces',
        status: 'ACTIVE',
    },
    {
        id: '195db787-6c8a-4780-9151-71ec183ac858',
        name: 'Wyman, Kertzmann and Williamson',
        funding: '359.00',
        inceptionDate: '2020-03-27T11:55:55.045Z',
        business: 'leverage out-of-the-box infrastructures',
        status: 'ACTIVE',
    },
    {
        id: 'fe601a0a-89fb-4133-b4b7-c552fc05663f',
        name: 'Paucek LLC',
        funding: '586.00',
        inceptionDate: '2020-04-28T17:33:18.382Z',
        business: 'implement turn-key vortals',
        status: 'ACTIVE',
    },
    {
        id: '67442ec1-a030-4a60-8a50-46348c86fdbd',
        name: 'Huel - Aufderhar',
        funding: '715.00',
        inceptionDate: '2019-11-27T08:37:43.455Z',
        business: 'enable vertical bandwidth',
        status: 'ACTIVE',
    },
    {
        id: 'c438e3b2-1e23-4be6-819d-daa0cc980ea1',
        name: 'Kemmer, Parker and Sanford',
        funding: '82.00',
        inceptionDate: '2019-11-08T09:14:32.139Z',
        business: 'syndicate magnetic schemas',
        status: 'ACTIVE',
    },
    {
        id: 'c12f2191-a8ad-4dba-af19-de64c42591db',
        name: 'Sporer, Toy and Christiansen',
        funding: '350.00',
        inceptionDate: '2020-08-13T13:43:17.438Z',
        business: 'seize transparent portals',
        status: 'ACTIVE',
    },
    {
        id: 'c374d1e1-3ec3-497d-ac72-6ef18e8abdfd',
        name: 'King, Raynor and Swift',
        funding: '113.00',
        inceptionDate: '2019-11-20T04:26:34.049Z',
        business: 'synthesize rich networks',
        status: 'ACTIVE',
    },
    {
        id: '3ac9660d-17f6-4309-bac2-2f825b1d93ea',
        name: 'Kub, Schuppe and Blick',
        funding: '676.00',
        inceptionDate: '2020-07-09T17:44:42.228Z',
        business: 'utilize distributed schemas',
        status: 'ACTIVE',
    },
    {
        id: '878380c3-7901-4ca7-83aa-ab11b66e69e2',
        name: 'Gutkowski, Hilll and Lind',
        funding: '255.00',
        inceptionDate: '2020-09-16T23:17:26.355Z',
        business: 'expedite magnetic e-commerce',
        status: 'ACTIVE',
    },
    {
        id: '9848ac36-fd6a-4a65-bf3c-e6e597fb42fc',
        name: 'Berge, Hauck and Kuphal',
        funding: '546.00',
        inceptionDate: '2020-04-09T14:30:50.925Z',
        business: 'leverage compelling content',
        status: 'ACTIVE',
    },
    {
        id: '31478a9a-8d68-4ac9-85ca-98ca0375216d',
        name: 'Shanahan, Mueller and Wiegand',
        funding: '414.00',
        inceptionDate: '2020-10-16T01:49:43.841Z',
        business: 'transition sticky initiatives',
        status: 'ACTIVE',
    },
    {
        id: '3718c551-2706-48b6-9695-930f3055e28b',
        name: 'Hayes, Aufderhar and Considine',
        funding: '299.00',
        inceptionDate: '2020-10-15T11:15:25.536Z',
        business: 'facilitate cross-platform initiatives',
        status: 'ACTIVE',
    },
    {
        id: 'ad05ed78-7c9f-4f12-ae80-9b693a9161be',
        name: 'Hirthe - Wiza',
        funding: '132.00',
        inceptionDate: '2020-08-29T06:40:19.070Z',
        business: 'visualize seamless convergence',
        status: 'ACTIVE',
    },
    {
        id: 'a4e4b4b4-5d77-4411-994d-ab757eb09736',
        name: 'Fadel and Sons',
        funding: '815.00',
        inceptionDate: '2020-06-22T15:59:33.910Z',
        business: 'optimize strategic interfaces',
        status: 'ACTIVE',
    },
    {
        id: '6d5ea555-e5f2-40b5-a2c7-ab9bac2b97fd',
        name: 'Huel, Wintheiser and Steuber',
        funding: '774.00',
        inceptionDate: '2020-05-13T23:01:00.690Z',
        business: 'enhance proactive infomediaries',
        status: 'ACTIVE',
    },
    {
        id: '5af0daa7-dadf-4d36-9edf-3be98bdcb976',
        name: 'Smith - Dickens',
        funding: '333.00',
        inceptionDate: '2020-07-23T18:38:33.803Z',
        business: 'enhance next-generation e-business',
        status: 'ACTIVE',
    },
    {
        id: '4cf36140-7afc-4d13-a05a-324d491fccab',
        name: 'Reinger, Beer and Kunde',
        funding: '467.00',
        inceptionDate: '2020-07-01T09:18:53.225Z',
        business: 'incubate distributed infrastructures',
        status: 'ACTIVE',
    },
    {
        id: '56805baa-7a3c-40de-81c8-9875ee81d96b',
        name: 'Wisozk, Aufderhar and Gislason',
        funding: '812.00',
        inceptionDate: '2020-01-26T12:09:54.335Z',
        business: 'visualize front-end supply-chains',
        status: 'ACTIVE',
    },
    {
        id: 'ca7bbd6a-37e0-4276-9106-280676971181',
        name: 'Kreiger - Bahringer',
        funding: '369.00',
        inceptionDate: '2020-04-02T00:58:02.819Z',
        business: 'reintermediate integrated blockchains',
        status: 'ACTIVE',
    },
    {
        id: 'e0cefe43-14c4-42a5-970d-5af341f2cb74',
        name: 'Kling Group',
        funding: '206.00',
        inceptionDate: '2020-08-25T07:28:47.170Z',
        business: 'reintermediate value-added markets',
        status: 'ACTIVE',
    },
    {
        id: '7b2a9a5c-7b3c-41a4-a071-564e06ffa274',
        name: 'McDermott - Gleichner',
        funding: '224.00',
        inceptionDate: '2019-10-27T21:57:46.664Z',
        business: 'incubate ubiquitous relationships',
        status: 'ACTIVE',
    },
    {
        id: '21ad1997-366e-4847-9825-a427d092a96f',
        name: 'Schroeder - Dickinson',
        funding: '443.00',
        inceptionDate: '2020-05-28T13:04:30.877Z',
        business: 'leverage back-end models',
        status: 'ACTIVE',
    },
    {
        id: '494febaa-a41c-4533-a120-1195b3222c98',
        name: 'Schoen, Nienow and Toy',
        funding: '62.00',
        inceptionDate: '2020-05-19T00:33:05.895Z',
        business: 'maximize holistic supply-chains',
        status: 'ACTIVE',
    },
    {
        id: '1dbb8ec0-0808-4197-9d94-fb4b4552945c',
        name: 'Kuhlman, Windler and Lowe',
        funding: '582.00',
        inceptionDate: '2020-01-14T02:42:18.133Z',
        business: 'evolve killer e-markets',
        status: 'ACTIVE',
    },
    {
        id: 'bafac768-115b-4c89-8bcf-ea7491d362ab',
        name: 'White, Upton and Ankunding',
        funding: '519.00',
        inceptionDate: '2020-01-06T03:52:37.428Z',
        business: 'productize global architectures',
        status: 'ACTIVE',
    },
    {
        id: 'a1d62cc1-195a-40e0-99ac-a641b32ed463',
        name: 'Beer Group',
        funding: '786.00',
        inceptionDate: '2020-07-04T12:43:50.265Z',
        business: 'grow sexy web-readiness',
        status: 'ACTIVE',
    },
    {
        id: 'a6aaa737-bcf7-48db-a8dc-e8f5bf2b4c6f',
        name: 'Pouros and Sons',
        funding: '578.00',
        inceptionDate: '2019-12-06T21:54:19.000Z',
        business: 'benchmark 24/365 web services',
        status: 'ACTIVE',
    },
    {
        id: 'b1a1ab77-d9a0-4273-bdae-fb59066f668a',
        name: 'Ernser, Dibbert and Bashirian',
        funding: '797.00',
        inceptionDate: '2020-04-14T23:52:09.029Z',
        business: 'redefine 24/7 paradigms',
        status: 'ACTIVE',
    },
    {
        id: '54c79a11-95ef-4d42-b2b3-fa1552356edb',
        name: 'Swaniawski Group',
        funding: '976.00',
        inceptionDate: '2020-07-14T15:30:04.978Z',
        business: 'drive proactive web services',
        status: 'ACTIVE',
    },
    {
        id: '88073b56-fe77-4434-9d8a-019bfb51b185',
        name: 'Beer Inc',
        funding: '319.00',
        inceptionDate: '2020-09-05T21:19:21.201Z',
        business: 'enable frictionless blockchains',
        status: 'ACTIVE',
    },
    {
        id: 'f96534d4-0657-4059-aace-3520fc1e1c12',
        name: 'Rath, Johns and Mills',
        funding: '341.00',
        inceptionDate: '2020-04-02T00:42:19.149Z',
        business: 'implement robust relationships',
        status: 'ACTIVE',
    },
    {
        id: '3be6372b-bad6-4e28-a41b-f1499aa36816',
        name: 'Krajcik, Johnson and Heller',
        funding: '66.00',
        inceptionDate: '2020-07-17T06:34:32.156Z',
        business: 'maximize impactful metrics',
        status: 'ACTIVE',
    },
    {
        id: 'fadb4ffc-da3b-41be-88d4-0011e738b8d3',
        name: "Windler, Treutel and O'Reilly",
        funding: '192.00',
        inceptionDate: '2020-02-28T15:27:44.907Z',
        business: 'synthesize seamless channels',
        status: 'ACTIVE',
    },
    {
        id: 'f9e50e2d-93e2-490d-a57c-b4129b2c8d9c',
        name: 'Metz LLC',
        funding: '962.00',
        inceptionDate: '2020-05-27T10:53:01.342Z',
        business: 'leverage leading-edge experiences',
        status: 'ACTIVE',
    },
    {
        id: 'f437dd4c-e986-435a-a4ea-5e4833a03e56',
        name: 'Tromp Inc',
        funding: '490.00',
        inceptionDate: '2020-05-31T07:04:54.414Z',
        business: 'redefine bleeding-edge convergence',
        status: 'ACTIVE',
    },
    {
        id: '183d0261-093b-4584-88bc-894ca1705428',
        name: 'Schmeler, Brakus and Goldner',
        funding: '91.00',
        inceptionDate: '2019-12-25T23:25:49.889Z',
        business: 'optimize revolutionary systems',
        status: 'ACTIVE',
    },
    {
        id: 'a009f8d7-ba1a-4a4c-a409-b7cbc4bd4b13',
        name: 'Gorczany, Moen and Kunde',
        funding: '942.00',
        inceptionDate: '2020-04-19T14:33:19.170Z',
        business: 'strategize mission-critical action-items',
        status: 'ACTIVE',
    },
    {
        id: '1e7ec078-fad9-456f-9272-f3f16e6c8e9d',
        name: 'Watsica, Weissnat and Schoen',
        funding: '215.00',
        inceptionDate: '2020-02-18T09:10:27.759Z',
        business: 'harness plug-and-play users',
        status: 'ACTIVE',
    },
    {
        id: '38efc83d-5aba-4a4f-8c80-c71e1c9d07c2',
        name: 'Green Group',
        funding: '712.00',
        inceptionDate: '2020-10-17T21:21:43.555Z',
        business: 'aggregate compelling metrics',
        status: 'ACTIVE',
    },
    {
        id: '13f28ce6-222f-44bd-a601-3ccaf56a3293',
        name: 'Hoeger LLC',
        funding: '45.00',
        inceptionDate: '2020-03-01T16:03:52.875Z',
        business: 'integrate visionary deliverables',
        status: 'ACTIVE',
    },
    {
        id: '13f28ce6-222f-44bd-a601-3ccaf56a3293',
        name: 'Hoeger LLC',
        funding: '45.00',
        inceptionDate: '2020-03-01T16:03:52.875Z',
        business: 'integrate visionary deliverables',
        status: 'ACTIVE',
    },
    {
        id: '7ae32c4f-f80c-452c-93e4-1a1c1c2c28cf',
        name: 'Koepp and Sons',
        funding: '78.00',
        inceptionDate: '2020-03-17T17:05:20.882Z',
        business: 'e-enable leading-edge initiatives',
        status: 'ACTIVE',
    },
    {
        id: '427dbcef-5b94-440e-9bfa-89210a4ccdee',
        name: 'Prohaska, Reichert and Krajcik',
        funding: '867.00',
        inceptionDate: '2019-12-21T14:03:06.128Z',
        business: 'monetize ubiquitous markets',
        status: 'ACTIVE',
    },
    {
        id: '5b9fdf42-d27c-46c4-afd2-5e6e7f47d550',
        name: 'Considine and Sons',
        funding: '509.00',
        inceptionDate: '2020-03-11T09:02:10.227Z',
        business: 'generate B2B experiences',
        status: 'ACTIVE',
    },
    {
        id: '5afa7070-3fdc-4a3b-b7fc-c02abf6456ee',
        name: 'Rippin, Turner and Berge',
        funding: '735.00',
        inceptionDate: '2020-06-28T22:40:40.635Z',
        business: 'enhance bleeding-edge functionalities',
        status: 'ACTIVE',
    },
    {
        id: 'f3978c72-661e-4220-af57-cbf80f2d8485',
        name: 'Nikolaus - Roob',
        funding: '158.00',
        inceptionDate: '2020-10-02T08:05:48.335Z',
        business: 'scale innovative e-tailers',
        status: 'ACTIVE',
    },
    {
        id: '1f138dee-8d12-4cc4-b93b-b012ea301de0',
        name: 'Kovacek - Schultz',
        funding: '869.00',
        inceptionDate: '2020-07-14T10:05:58.333Z',
        business: 'maximize bleeding-edge technologies',
        status: 'ACTIVE',
    },
]

export { companies, companiesColumns }