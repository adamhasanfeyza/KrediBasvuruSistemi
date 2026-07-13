/* import { useState } from "react";
import {
    ArrowRight,
    CalendarDays,
    Car,
    ChevronDown,
    ClipboardList,
    FileText,
    Home,
    Info,
    Landmark,
    LogOut,
    Search,
    Tag,
    User,
    UserRound,
    GraduationCap,
    BriefcaseBusiness,
} from "lucide-react";

type CreditType =
    | "İhtiyaç Kredisi"
    | "Konut Kredisi"
    | "Araç Kredisi"
    | "Eğitim Kredisi"
    | "İşletme Kredisi";

const menuItems = [
    {
        title: "Ana Sayfa",
        icon: Home,
        active: true,
    },
    {
        title: "Başvurularım",
        icon: ClipboardList,
    },
    {
        title: "Kredi Tekliflerim",
        icon: Tag,
    },
    {
        title: "Profil Bilgilerim",
        icon: UserRound,
    },
    {
        title: "Çıkış Yap",
        icon: LogOut,
    },
];

const steps = [
    {
        number: 1,
        title: "Başvuru Bilgileri",
        active: true,
    },
    {
        number: 2,
        title: "Kredi Türü",
        active: false,
    },
    {
        number: 3,
        title: "Onay",
        active: false,
    },
];

const creditTypes = [
    {
        title: "İhtiyaç Kredisi" as CreditType,
        description: "Günlük ihtiyaçlarınızı karşılayın.",
        icon: User,
        background: "bg-[#f0f1f5]",
    },
    {
        title: "Konut Kredisi" as CreditType,
        description: "Hayalinizdeki eve sahip olun.",
        icon: Home,
        background: "bg-[#fff0d8]",
    },
    {
        title: "Araç Kredisi" as CreditType,
        description: "Yeni veya ikinci el araç finansmanı.",
        icon: Car,
        background: "bg-[#f0f1f5]",
    },
    {
        title: "Eğitim Kredisi" as CreditType,
        description: "Eğitim harcamalarınız için destek.",
        icon: GraduationCap,
        background: "bg-[#fff0d8]",
    },
    {
        title: "İşletme Kredisi" as CreditType,
        description: "İşinizi büyütmek için doğru finansman.",
        icon: BriefcaseBusiness,
        background: "bg-[#f0f1f5]",
    },
];

function NewCreditApplication() {
    const [selectedCredit, setSelectedCredit] =
        useState<CreditType>("İhtiyaç Kredisi");

    const [amount, setAmount] = useState("");
    const [term, setTerm] = useState("");
    const [purpose, setPurpose] = useState("");
    const [applicationDate, setApplicationDate] = useState("2024-05-16");

    return (
        <div className="min-h-screen bg-[#fbfcfe] text-[#001d5b]">
            <aside className="fixed bottom-0 left-0 top-0 z-30 flex w-[262px] flex-col bg-gradient-to-b from-[#00245c] to-[#001e4e]">
                <div className="flex h-[94px] items-center border-b border-[#dce2ec] bg-white px-7">
                    <div className="flex items-center gap-3">
                        <div className="relative flex h-[57px] w-[57px] items-center justify-center rounded-full border-[5px] border-[#052561]">
                            <Landmark size={31} strokeWidth={1.8} />

                            <div className="absolute -bottom-1 -right-1 h-[15px] w-[15px] rounded-full bg-[#d99d13]" />
                        </div>

                        <div>
                            <h1 className="text-[26px] font-bold tracking-[7px] text-[#09255d]">
                                COSEF
                            </h1>

                            <p className="text-center text-[12px] font-semibold tracking-[7px] text-[#d2910b]">
                                BANK
                            </p>
                        </div>
                    </div>
                </div>

                <nav className="space-y-17 px-4 pt-8">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                type="button"
                                key={item.title}
                                className={`flex h-[66px] w-full items-center gap-5 rounded-xl px-5 text-left text-[17px] font-semibold transition ${item.active
                                        ? "bg-gradient-to-r from-[#e5a51a] to-[#f0ae19] text-white shadow-lg"
                                        : "text-white hover:bg-white/10"
                                    }`}
                            >
                                <Icon size={29} strokeWidth={1.8} />
                                <span>{item.title}</span>
                            </button>
                        );
                    })}
                </nav>
            </aside>

            <div className="ml-[262px] min-h-screen">
                <header className="flex h-[94px] items-center justify-between border-b border-[#dce2ec] bg-white px-8">
                    <h2 className="text-[22px] font-bold text-[#031f5a]">
                        Kredi Başvuru Sistemi
                    </h2>

                    <div className="flex items-center gap-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ara (örn. başvuru, müşteri, rapor...)"
                                className="h-[52px] w-[392px] rounded-xl border border-[#d7dfec] bg-white px-5 pr-14 text-[15px] text-[#203e73] outline-none placeholder:text-[#43608f] focus:border-[#163c7a]"
                            />

                            <Search
                                size={25}
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            />
                        </div>

                        <div className="h-[43px] w-px bg-[#dce2ec]" />

                        <button
                            type="button"
                            className="flex items-center gap-2 text-[16px] font-bold text-[#051f59]"
                        >
                            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#09275f]">
                                <UserRound size={21} />
                            </div>

                            Müşteri Paneli
                            <ChevronDown size={16} />
                        </button>
                    </div>
                </header>

                <main className="px-8 py-6">
                    <section className="mb-7 grid grid-cols-[420px_1fr] items-center gap-14">
                        <div className="flex items-center gap-6">
                            <div className="flex h-[94px] w-[94px] items-center justify-center rounded-full border border-[#dbe2ec] bg-white">
                                <div className="relative">
                                    <ClipboardList size={46} strokeWidth={1.8} />

                                    <span className="absolute -bottom-1 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#dfa31c] text-lg font-bold text-white">
                                        +
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h1 className="relative pb-3 text-[30px] font-bold text-[#021e5a]">
                                    Yeni Kredi Başvurusu

                                    <span className="absolute bottom-0 left-0 h-[2px] w-[55px] bg-[#dca220]" />
                                </h1>

                                <p className="mt-3 text-[16px] text-[#173c78]">
                                    Kredi başvurunuzu adım adım tamamlayın.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto flex w-[570px] items-start">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="relative flex flex-1 flex-col items-center"
                                >
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-1/2 top-[22px] h-px w-full bg-[#c9d3e3]" />
                                    )}

                                    <div
                                        className={`relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border-2 text-lg font-bold ${step.active
                                                ? "border-[#00265e] bg-[#00265e] text-white"
                                                : "border-[#d4deeb] bg-white text-[#09265e]"
                                            }`}
                                    >
                                        {step.number}
                                    </div>

                                    <span className="mt-3 text-[15px] font-semibold text-[#08255e]">
                                        {step.title}
                                    </span>

                                    {step.active && (
                                        <div className="mt-3 h-[2px] w-[142px] bg-[#06265f]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-xl border border-[#dce3ed] bg-white px-6 py-5">
                        <SectionTitle
                            icon={<ClipboardList size={28} />}
                            title="Başvuru Bilgileri"
                        />

                        <div className="grid grid-cols-4 gap-12">
                            <FormField
                                label="Talep Edilen Tutar"
                                value={amount}
                                onChange={setAmount}
                                placeholder="Tutar giriniz"
                                helper="Minimum 1.000 TL"
                                suffix="₺"
                            />

                            <SelectField
                                label="Vade"
                                value={term}
                                onChange={setTerm}
                                placeholder="Vade seçiniz"
                                helper="3 - 120 ay arasında"
                                options={[
                                    "3 Ay",
                                    "6 Ay",
                                    "12 Ay",
                                    "24 Ay",
                                    "36 Ay",
                                    "48 Ay",
                                    "60 Ay",
                                    "120 Ay",
                                ]}
                            />

                            <SelectField
                                label="Kredi Amacı"
                                value={purpose}
                                onChange={setPurpose}
                                placeholder="Seçiniz"
                                options={[
                                    "Eğitim",
                                    "Ev Tadilatı",
                                    "Araç Alımı",
                                    "Borç Kapatma",
                                    "Sağlık",
                                    "Diğer",
                                ]}
                            />

                            <DateField
                                label="Başvuru Tarihi"
                                value={applicationDate}
                                onChange={setApplicationDate}
                            />
                        </div>
                    </section>

                    <section className="mt-4 rounded-xl border border-[#dce3ed] bg-white px-5 py-5">
                        <SectionTitle
                            icon={<FileText size={28} />}
                            title="Kredi Türü Seç"
                        />

                        <div className="grid grid-cols-5 gap-7">
                            {creditTypes.map((credit) => {
                                const Icon = credit.icon;
                                const isSelected = selectedCredit === credit.title;

                                return (
                                    <button
                                        type="button"
                                        key={credit.title}
                                        onClick={() => setSelectedCredit(credit.title)}
                                        className={`relative min-h-[218px] rounded-xl border bg-white px-7 py-5 text-left transition ${isSelected
                                                ? "border-[#173d7a] shadow-[0_0_0_1px_#173d7a]"
                                                : "border-[#dce3ed] hover:border-[#8096bc]"
                                            }`}
                                    >
                                        <span
                                            className={`absolute right-4 top-4 flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 ${isSelected
                                                    ? "border-[#0a2d68] bg-[#0a2d68]"
                                                    : "border-[#cbd7e7] bg-white"
                                                }`}
                                        >
                                            {isSelected && (
                                                <span className="h-[7px] w-[7px] rounded-full bg-white" />
                                            )}
                                        </span>

                                        <div
                                            className={`mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full ${credit.background}`}
                                        >
                                            <Icon size={41} strokeWidth={1.8} />
                                        </div>

                                        <h3 className="mb-3 text-[19px] font-bold text-[#061e59]">
                                            {credit.title}
                                        </h3>

                                        <p className="text-[15px] leading-7 text-[#23457d]">
                                            {credit.description}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    <div className="mt-7 flex items-center justify-between px-1">
                        <div className="flex min-h-[82px] w-[365px] items-center gap-5 rounded-xl border border-[#efc977] bg-[#fffaf0] px-6">
                            <Info
                                size={39}
                                strokeWidth={1.7}
                                className="shrink-0 text-[#d59700]"
                            />

                            <p className="text-[15px] font-bold leading-6 text-[#08265f]">
                                Risk kontrolü başvuru sonrası yapılacaktır.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="flex h-[60px] w-[290px] items-center justify-center gap-16 rounded-lg bg-[#00265e] text-[18px] font-bold text-white shadow-sm transition hover:bg-[#001d4a]"
                        >
                            Başvuruyu Gönder
                            <ArrowRight size={27} />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

type SectionTitleProps = {
    icon: React.ReactNode;
    title: string;
};

function SectionTitle({ icon, title }: SectionTitleProps) {
    return (
        <div className="mb-6 flex items-center gap-4 text-[#031f5a]">
            {icon}
            <h2 className="text-[19px] font-bold">{title}</h2>
        </div>
    );
}

type FormFieldProps = {
    label: string;
    value: string;
    placeholder: string;
    helper?: string;
    suffix?: string;
    onChange: (value: string) => void;
};

function FormField({
    label,
    value,
    placeholder,
    helper,
    suffix,
    onChange,
}: FormFieldProps) {
    return (
        <label className="block">
            <span className="mb-3 block text-[15px] font-bold text-[#061e59]">
                {label}
            </span>

            <div className="relative">
                <input
                    type="number"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder={placeholder}
                    min="1000"
                    className="h-[54px] w-full rounded-lg border border-[#ccd8e8] px-4 pr-11 text-[16px] text-[#08275f] outline-none placeholder:text-[#47618b] focus:border-[#143c78]"
                />

                {suffix && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-[#0b2a64]">
                        {suffix}
                    </span>
                )}
            </div>

            {helper && (
                <span className="mt-3 block text-[14px] text-[#23457d]">
                    {helper}
                </span>
            )}
        </label>
    );
}

type SelectFieldProps = {
    label: string;
    value: string;
    placeholder: string;
    options: string[];
    helper?: string;
    onChange: (value: string) => void;
};

function SelectField({
    label,
    value,
    placeholder,
    options,
    helper,
    onChange,
}: SelectFieldProps) {
    return (
        <label className="block">
            <span className="mb-3 block text-[15px] font-bold text-[#061e59]">
                {label}
            </span>

            <div className="relative">
                <select
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="h-[54px] w-full appearance-none rounded-lg border border-[#ccd8e8] bg-white px-4 pr-11 text-[16px] text-[#0b2a64] outline-none focus:border-[#143c78]"
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>

                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={20}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                />
            </div>

            {helper && (
                <span className="mt-3 block text-[14px] text-[#23457d]">
                    {helper}
                </span>
            )}
        </label>
    );
}

type DateFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
};

function DateField({ label, value, onChange }: DateFieldProps) {
    return (
        <label className="block">
            <span className="mb-3 block text-[15px] font-bold text-[#061e59]">
                {label}
            </span>

            <div className="relative">
                <input
                    type="date"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="h-[54px] w-full rounded-lg border border-[#ccd8e8] px-4 pr-12 text-[16px] text-[#08275f] outline-none focus:border-[#143c78]"
                />

                <CalendarDays
                    size={22}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 bg-white"
                />
            </div>
        </label>
    );
}

export default NewCreditApplication; */