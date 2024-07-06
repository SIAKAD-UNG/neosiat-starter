import type { Submenu } from "./interface";

export const NAVIGATIONS_MAIN: Submenu[] = [
    {
        id: "dashboard",
        name: "Dashboard",
        link: {
            href: "/dashboard",
            target: "_self",
        },
        current: true,
        items: [],
    },
    {
        id: "biodata",
        name: "Biodata",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
    {
        id: "kurikulum",
        name: "Kurikulum",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
    {
        id: "biaya-kuliah",
        name: "Biaya Kuliah",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
    {
        id: "bahan-tugas",
        name: "Bahan & Tugas",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
    {
        id: "perkuliahan",
        name: "Perkuliahan",
        items: [
            {
                id: "jadww-adepsed",
                name: "Jadwal & Prensensi",
                link: {
                    href: "/",
                },
                items: [],
            },
            {
                id: "krs",
                name: "KRS",
                link: {
                    href: "/",
                },
                items: [],
            },
        ],
    },
    {
        id: "pembimbing-akademik",
        name: "Pembimbing Akademik",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
    {
        id: "kuisioner",
        name: "Kuisioner",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
    {
        id: "nilai",
        name: "Nilai",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
]

export const NAVIGATIONS_KEGIATAN_LUAR: Submenu[] = [
    {
        id: "kegiatan",
        name: "Kegiatan",
        items: [
            {
                id: "akademik",
                name: "Akademik",
                link: {
                    href: "/",
                },
                items: [],
            },
            {
                id: "seminar",
                name: "Seminar",
                link: {
                    href: "/",
                },
                items: [],
            },
            {
                id: "sertifikasi",
                name: "Sertifikasi",
                link: {
                    href: "/",
                },
                items: [],
            },
        ],
    },
    {
        id: "pengajuan",
        name: "Pengajuan",
        items: [
            {
                id: "cuti",
                name: "Cuti",
                link: {
                    href: "/",
                },
                items: [],
            },
            {
                id: "lock-jurnal",
                name: "Lock Jurnal",
                link: {
                    href: "/",
                },
                items: [],
            },
            {
                id: "proposal",
                name: "proposal",
                link: {
                    href: "/",
                },
                items: [],
            },
        ],
    },
    {
        id: "skpi",
        name: "SKPI",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
]

export const NAVIGATIONS_BANTUAN_ALUMNI: Submenu[] = [
    {
        id: "tracer-study",
        name: "Tracer Study",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
    {
        id: "panduan",
        name: "Panduan",
        link: {
            href: "/",
            target: "_self",
        },
        items: [],
    },
]

