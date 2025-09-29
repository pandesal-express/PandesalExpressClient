import type { SVGProps } from "react";

export function IconCameraSwitchRegular(props?: Readonly<SVGProps<SVGSVGElement>>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M21.25 7.5a.75.75 0 0 1 .743.648L22 8.25v8.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H6.061l.72.72a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073l-2-2l-.064-.072l-.007-.01l.07.082a.75.75 0 0 1-.127-.89a.8.8 0 0 1 .128-.17l2-2a.75.75 0 0 1 1.133.976l-.073.084l-.72.72h12.69a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-8.5a.75.75 0 0 1 .75-.75m-3.054-5.353l.084.073l2 2a1 1 0 0 1 .071.081l-.07-.081a.75.75 0 0 1 .004 1.056l-.005.004l-2 2a.75.75 0 0 1-1.133-.976l.073-.084l.718-.72H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v8.5a.75.75 0 0 1-1.493.102L2 15.75v-8.5a3.25 3.25 0 0 1 3.066-3.245L5.25 4h12.689l-.72-.72a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"
        ></path>
    </svg>);
}

export function IconVideoCameraDuotone(props?: Readonly<SVGProps<SVGSVGElement>>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={256} height={256} viewBox="0 0 256 256" {...props}>
            <g fill="currentColor">
                <path d="M200 72v112a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity={0.2}></path>
                <path
                    d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95l-32-21.33v-23.44L240 95Z"
                ></path>
            </g>
        </svg>
    );
}

export function IconLineLogin(props?: Readonly<SVGProps<SVGSVGElement>>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
                <path strokeDasharray={36} strokeDashoffset={36} d="M13 4l7 0c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-7">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></animate>
                </path>
                <path strokeDasharray={14} strokeDashoffset={14} d="M3 12h11.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate>
                </path>
                <path strokeDasharray={6} strokeDashoffset={6} d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></animate>
                </path>
            </g>
        </svg>
    );
}

export function IconLineLogout(props?: Readonly<SVGProps<SVGSVGElement>>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
                <path strokeDasharray={36} strokeDashoffset={36} d="M12 4h-7c-0.55 0 -1 0.45 -1 1v14c0 0.55 0.45 1 1 1h7">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></animate>
                </path>
                <path strokeDasharray={14} strokeDashoffset={14} d="M9 12h11.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate>
                </path>
                <path strokeDasharray={6} strokeDashoffset={6} d="M20.5 12l-3.5 -3.5M20.5 12l-3.5 3.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></animate>
                </path>
            </g>
        </svg>
    );
}

export function IconSearchLine(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></path>
    </svg>);
}

export function IconFilter(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 7h15M7 12h10m-7 5h4"></path>
    </svg>);
}

export function IconCalendar(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" {...props}>
        <path fill="currentColor" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"></path>
    </svg>);
}

export function IconExport(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M5.552 20.968a2.577 2.577 0 0 1-2.5-2.73c-.012-2.153 0-4.306 0-6.459a.5.5 0 0 1 1 0c0 2.2-.032 4.4 0 6.6c.016 1.107.848 1.589 1.838 1.589h12.463A1.55 1.55 0 0 0 19.825 19a3 3 0 0 0 .1-1.061v-6.16a.5.5 0 0 1 1 0c0 2.224.085 4.465 0 6.687a2.567 2.567 0 0 1-2.67 2.5Z"></path>
        <path fill="currentColor" d="M12.337 3.176a.46.46 0 0 0-.311-.138q-.021.002-.043-.006c-.022-.008-.027 0-.041.006a.46.46 0 0 0-.312.138L7.961 6.845a.5.5 0 0 0 .707.707l2.816-2.815v10.742a.5.5 0 0 0 1 0V4.737L15.3 7.552a.5.5 0 0 0 .707-.707Z"></path>
    </svg>);
}

export function IconAdd(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
    </svg>);
}

export function IconView(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
            <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045"></path>
            <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></path>
        </g>
    </svg>);
}

export function IconArrowLeft(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" {...props}>
        <path fill="currentColor" fillRule="evenodd" d="m5.854 4.146l.707.708L3.914 7.5h9.043v1H3.914l2.647 2.646l-.707.708L2 8z" clipRule="evenodd"></path>
    </svg>);
}

export function IconDelete(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"></path>
    </svg>);
}

export function IconEdit(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M5 18.08V19h.92l9.06-9.06l-.92-.92z" opacity={0.3}></path>
        <path fill="currentColor" d="M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92z"></path>
    </svg>);
}

export function IconCloseToMenu(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19">
            <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19;M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"></animate>
        </path>
    </svg>);
}

export function IconMenuToClose(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19">
            <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"></animate>
        </path>
    </svg>);
}

export function IconEmail(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"></path>
    </svg>);
}

export function IconBuilding(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={256} height={256} viewBox="0 0 256 256" {...props}>
        <path fill="currentColor" d="M240 210h-10V72a6 6 0 0 0-6-6h-42V40a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v58H32a6 6 0 0 0-6 6v106H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 110h42a6 6 0 0 0 6-6V46h84v26a6 6 0 0 0 6 6h42v132h-68v-42a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v42H38Zm100 100h-20v-36h20ZM114 72a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m56 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-84 32a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m28-32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m56 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></path>
    </svg>);
}

export function IconCreditCard(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <g fill="none">
            <path stroke="currentColor" d="M3.5 9.398c0-1.025 0-1.538.203-1.928a1.8 1.8 0 0 1 .767-.767c.39-.203.903-.203 1.928-.203h11.204c1.025 0 1.538 0 1.928.203a1.8 1.8 0 0 1 .767.767c.203.39.203.903.203 1.928v6.204c0 1.025 0 1.538-.203 1.928a1.8 1.8 0 0 1-.767.767c-.39.203-.903.203-1.928.203H6.398c-1.025 0-1.538 0-1.928-.203a1.8 1.8 0 0 1-.767-.767c-.203-.39-.203-.903-.203-1.928z" strokeWidth={1}></path>
            <path stroke="currentColor" strokeLinecap="round" d="M3.5 10.5h17" strokeWidth={1}></path>
            <circle cx={6.5} cy={15.5} r={0.5} fill="currentColor"></circle>
        </g>
    </svg>);
}

export function IconMinus(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M5.5 12a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"></path>
    </svg>);
}

export function IconDocumentEdit(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor" fillRule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238a.75.75 0 0 1-1.06 1.06c-.424-.422-1.004-.676-2.01-.811c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S4.025 4.705 3.89 5.71c-.138 1.029-.14 2.383-.14 4.29v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.696-.696.907-1.777.943-4.309a.75.75 0 0 1 1.5.022c-.035 2.427-.192 4.158-1.382 5.348c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m7.17 5.796a2.716 2.716 0 1 1 3.84 3.84L17.2 15.643a7 7 0 0 1-.63.587q-.346.27-.744.46c-.224.107-.46.185-.806.3l-2.084.695a1.28 1.28 0 0 1-1.62-1.62l.681-2.04l.014-.043c.116-.347.194-.582.301-.806a4 4 0 0 1 .46-.744c.153-.196.328-.371.587-.63l.031-.031zm2.78 1.06a1.216 1.216 0 0 0-1.72 0l-.182.182l.034.107c.094.27.273.63.611.968a2.55 2.55 0 0 0 1.075.645l.182-.182a1.216 1.216 0 0 0 0-1.72m-1.328 3.048a4 4 0 0 1-.99-.73a4 4 0 0 1-.73-.99L14.45 12.83c-.301.301-.407.409-.496.523q-.17.218-.289.467c-.062.131-.111.274-.246.678l-.4 1.2l.283.283l1.2-.4c.404-.135.547-.184.678-.246q.248-.12.467-.289c.114-.089.222-.195.523-.496zM7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clipRule="evenodd"
        ></path>
    </svg>);
}

export function IconForm(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}>
        <g fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h8c1.886 0 2.828 0 3.414.586S20 5.114 20 7v8c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.879C4 19.243 4 17.828 4 15z"></path>
            <path strokeLinecap="round" d="M15 18v3m-6-3v3M9 8h6m-6 4h6"></path>
        </g>
    </svg>);
}

export function IconHistory(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8a.5.5 0 0 0-.36-.85H6c0-3.9 3.18-7.05 7.1-7c3.72.05 6.85 3.18 6.9 6.9c.05 3.91-3.1 7.1-7 7.1c-1.61 0-3.1-.55-4.28-1.48a.994.994 0 0 0-1.32.08c-.42.42-.39 1.13.08 1.49A8.86 8.86 0 0 0 13 21c5.05 0 9.14-4.17 9-9.26c-.13-4.69-4.05-8.61-8.74-8.74m-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26c.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74"></path>
    </svg>);
}

export function IconPeso(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 20 20" {...props}>
        <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="M10.5 2.5h-5v-1h5A4.5 4.5 0 0 1 15 6v1a4.5 4.5 0 0 1-4.5 4.5h-5v-1h5A3.5 3.5 0 0 0 14 7V6a3.5 3.5 0 0 0-3.5-3.5"></path>
            <path d="M5.5 1.5A.5.5 0 0 1 6 2v15.5a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5"></path>
            <path d="M2 4.936a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5"></path>
        </g>
    </svg>);
}

export function IconGift(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path d="M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9-1v13"></path>
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path>
        </g>
    </svg>);
}

export function IconDownload(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"></path>
    </svg>);
}

export function IconPersons(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 20 20" {...props}><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M3.36 9.977a5.5 5.5 0 0 0-.923 3.05V14a.5.5 0 1 1-1 0v-.972A6.5 6.5 0 0 1 2.53 9.422l.108-.162a.5.5 0 1 1 .832.555z"></path><path d="M6.18 8.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.26 4.26 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1zm3.078 1.6c.47.706.721 1.534.721 2.382h1a5.3 5.3 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554z"></path><path d="M6.448 8.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.26 4.26 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1z"></path><path d="M6.25 7.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m4.259 4.936a5.5 5.5 0 0 0-.924 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556z"></path><path d="M13.42 11.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 13.42 10.5h.224a.5.5 0 1 1 0 1zm3.187 1.686a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556z"></path><path d="M13.695 11.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1z"></path><path d="M13.5 10.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></path></g></svg>);
}

export function IconArrowRightUp(props?: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6.5 17.5l11-11m0 0h-9m9 0v9"></path></svg>);
}

export function IconFileText(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.478 3H7.25A2.25 2.25 0 0 0 5 5.25v13.5A2.25 2.25 0 0 0 7.25 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.478 3c1.243 0 2.272 1.007 2.272 2.25V7.5A2.25 2.25 0 0 0 14 9.75h2.25A2.25 2.25 0 0 1 18.5 12M9.478 3c3.69 0 9.022 5.36 9.022 9M9 16.5h6m-6-3h4"></path></svg>);
}

export function IconFileSpreadsheet(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 256 256" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1}><path strokeWidth={15.992} d="M 32,48 V 207.9236"></path><path strokeLinejoin="round" strokeWidth={15.992} d="M 224,96 V 208"></path><path strokeLinejoin="round" strokeWidth={15.992} d="m 64,16 h 80"></path><path strokeWidth={15.992} d="M 64,240 H 192"></path><path strokeLinejoin="round" strokeWidth={15.992} d="m 224,208 c 0.0874,15.98169 -16,32 -32,32"></path><path strokeLinejoin="round" strokeWidth={15.992} d="m -32,208 c -10e-7,16 -16,32 -32,32" transform="scale(-1 1)"></path><path strokeLinejoin="round" strokeWidth={15.992} d="M -32,-47.976784 C -32,-32 -48,-16.356322 -63.999997,-16.000002" transform="scale(-1)"></path><path strokeLinejoin="round" strokeWidth={15.992} d="M 223.91257,96.071779 144,16"></path><path strokeLinejoin="round" strokeWidth={15.992} d="m -144,64 c -0.0492,15.912926 -16.06452,31.999995 -32,32" transform="scale(-1 1)"></path><path strokeLinejoin="round" strokeWidth={15.992} d="M 144,64 V 16"></path><path strokeLinejoin="round" strokeWidth={15.992} d="m 176,96 h 48"></path><path strokeLinejoin="round" strokeWidth={16} d="m 64,192 h 96"></path><path strokeLinejoin="round" strokeWidth={16} d="m 64,160 h 96"></path><path strokeLinejoin="round" strokeWidth={16} d="m 80,144 v 64"></path><path strokeLinejoin="round" strokeWidth={16} d="m 112,144 v 64"></path><path strokeLinejoin="round" strokeWidth={16} d="m 144,144 v 64"></path></g></svg>);
}

export function IconFileDigit(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><rect width={4} height={6} x={2} y={12} rx={2}></rect><path d="M10 12h2v6m-2 0h4"></path></g></svg>);
}

export function IconPrinter(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 15H8v3h8zm4-8H4v8h2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2zM8 10v2H5v-2zm8-6H8v3h8z"></path></svg>);
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="m3 7l9 6l9-6"></path></g></svg>);
}

export function IconSave(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h10.29q.323 0 .628.13q.305.132.522.349l2.465 2.465q.218.218.348.522q.131.305.131.628v10.29q0 .691-.462 1.154T18.384 20zM19 7.85L16.15 5H5.616q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173h12.769q.269 0 .442-.173t.173-.443zm-7 8.689q.827 0 1.414-.587T14 14.538t-.587-1.413T12 12.539t-1.413.586T10 14.538t.587 1.414t1.413.586M7.577 9.77h5.808q.348 0 .578-.23t.23-.577V7.577q0-.348-.23-.578t-.578-.23H7.577q-.348 0-.578.23t-.23.578v1.385q0 .348.23.578t.578.23M5 7.85V19V5z"></path></svg>);
}

export function IconFaceScan(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34c.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34c-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347c.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347c-.932-.93-1.243-2.24-1.347-4.34M17.5 17l-.202-.849a2 2 0 0 0-1.392-1.458l-2.406-.694v-1.467c.896-.605 1.5-1.736 1.5-3.032C15 7.567 13.656 6 12 6c-1.657 0-3 1.567-3 3.5c0 1.296.603 2.427 1.5 3.032v1.467l-2.391.7a2 2 0 0 0-1.371 1.406L6.5 17" color="currentColor"></path></svg>);
}

export function IconHome(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"></path><path fill="currentColor" fillRule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z" clipRule="evenodd"></path></svg>);
}

export function IconStore(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" {...props}><path fill="currentColor" d="M28 30H16v-8h-2v8H8v-8H6v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-8h-2Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="m33.79 13.27l-4.08-8.16A2 2 0 0 0 27.92 4H8.08a2 2 0 0 0-1.79 1.11l-4.08 8.16a2 2 0 0 0-.21.9v3.08a2 2 0 0 0 .46 1.28A4.67 4.67 0 0 0 6 20.13a4.72 4.72 0 0 0 3-1.07a4.73 4.73 0 0 0 6 0a4.73 4.73 0 0 0 6 0a4.73 4.73 0 0 0 6 0a4.72 4.72 0 0 0 6.53-.52a2 2 0 0 0 .47-1.28v-3.09a2 2 0 0 0-.21-.9M30 18.13A2.68 2.68 0 0 1 27.82 17L27 15.88L26.19 17a2.71 2.71 0 0 1-4.37 0L21 15.88L20.19 17a2.71 2.71 0 0 1-4.37 0L15 15.88L14.19 17a2.71 2.71 0 0 1-4.37 0L9 15.88L8.18 17A2.68 2.68 0 0 1 6 18.13a2.64 2.64 0 0 1-2-.88v-3.08L8.08 6h19.84L32 14.16v3.06a2.67 2.67 0 0 1-2 .91" className="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>);
}

export function IconSidebar(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 3.5v17M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></path></svg>);
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd"></path></svg>);
}

export function IconArrowPath(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>);
}

export function IconRotateClockwise(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.25 5.25h3m0 3.5c0 2.5-2.798 5.5-6.25 5.5a6.25 6.25 0 1 1 0-12.5c3.75 0 6.25 3.5 6.25 3.5v-3.5"></path></svg>);
}

export function IconMoney(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" fillOpacity={0.25} d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10v4c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"></path><circle cx={12} cy={12} r={2} fill="currentColor"></circle><rect width={3} height={1} x={5} y={8} fill="currentColor" rx={0.5}></rect><rect width={3} height={1} x={16} y={15} fill="currentColor" rx={0.5}></rect></svg>);
}

export function IconLog(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.197 10a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm-2.382 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm-1.581 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"></path><path fill="currentColor" d="M4.125 0h15.75a4.1 4.1 0 0 1 2.92 1.205A4.1 4.1 0 0 1 24 4.125c0 1.384-.476 2.794-1.128 4.16c-.652 1.365-1.515 2.757-2.352 4.104l-.008.013c-.849 1.368-1.669 2.691-2.28 3.97c-.614 1.283-.982 2.45-.982 3.503a2.625 2.625 0 1 0 4.083-2.183a.75.75 0 1 1 .834-1.247A4.126 4.126 0 0 1 19.875 24H4.5a4.125 4.125 0 0 1-4.125-4.125c0-2.234 1.258-4.656 2.59-6.902c.348-.586.702-1.162 1.05-1.728c.8-1.304 1.567-2.553 2.144-3.738H3.39c-.823 0-1.886-.193-2.567-1.035A3.65 3.65 0 0 1 0 4.125A4.125 4.125 0 0 1 4.125 0M15.75 19.875c0-1.38.476-2.786 1.128-4.15c.649-1.358 1.509-2.743 2.343-4.086l.017-.028c.849-1.367 1.669-2.692 2.28-3.972c.614-1.285.982-2.457.982-3.514A2.615 2.615 0 0 0 19.875 1.5a2.625 2.625 0 0 0-2.625 2.625c0 .865.421 1.509 1.167 2.009A.75.75 0 0 1 18 7.507H7.812c-.65 1.483-1.624 3.069-2.577 4.619c-.334.544-.666 1.083-.98 1.612c-1.355 2.287-2.38 4.371-2.38 6.137A2.625 2.625 0 0 0 4.5 22.5h12.193a4.1 4.1 0 0 1-.943-2.625M1.5 4.125c-.01.511.163 1.008.487 1.403c.254.313.74.479 1.402.479h12.86a3.65 3.65 0 0 1-.499-1.882a4.1 4.1 0 0 1 .943-2.625H4.125A2.625 2.625 0 0 0 1.5 4.125"></path></svg>);
}

export function IconCart(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 21 21" {...props}><g fill="none" fillRule="evenodd"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 6.5h12.5l-1.586 5.55a2 2 0 0 1-1.923 1.45h-6.7a2 2 0 0 1-1.989-1.78L4.5 4.5h-2" strokeWidth={1}></path><g fill="currentColor" transform="translate(2 4)"><circle cx={5} cy={12} r={1}></circle><circle cx={13} cy={12} r={1}></circle></g></g></svg>);
}

export function IconChartLine(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 48 48" {...props}><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path d="M6 6V42H42"></path><path d="M14 34L22 18L32 27L42 6"></path></g></svg>);
}

export function IconTruck(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}><path strokeLinejoin="round" strokeMiterlimit={1.5} d="M7 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path><path d="M14 17V6.6a.6.6 0 0 0-.6-.6H2.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.05M14 17H9.05M14 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M14 17h1"></path></g></svg>);
}

export function IconPackageExport(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 21l-8-4.5v-9L12 3l8 4.5V12m-8 0l8-4.5M12 12v9m0-9L4 7.5M15 18h7m-3-3l3 3l-3 3"></path></svg>);
}

export function IconPackage(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12 21l8.131-4.208c.316-.164.474-.245.589-.366a1 1 0 0 0 .226-.373c.054-.159.054-.336.054-.692V7.533M12 21l-8.131-4.208c-.316-.164-.474-.245-.589-.366a1 1 0 0 1-.226-.373C3 15.894 3 15.716 3 15.359V7.533M12 21v-9.063m9-4.404l-9 4.404m9-4.404l-4.5-2.33M3 7.534l8.269-4.28c.268-.138.401-.208.542-.235a1 1 0 0 1 .378 0c.14.027.274.097.541.235l3.77 1.95M3 7.534l4.5 2.202m4.5 2.202L7.5 9.735m0 0l9-4.531m-9 4.531v2.202"></path></svg>);
}

export function IconClipboard(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M7.263 3.26A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.01c.764.016 1.423.055 1.987.159c.758.14 1.403.404 1.928.93c.602.601.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.929c.564-.104 1.224-.143 1.987-.159m.002 1.5c-.718.016-1.272.052-1.718.134c-.566.104-.895.272-1.138.515c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191v6c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-6c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.515c-.446-.082-1-.118-1.718-.133A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zM6.25 10.5A.75.75 0 0 1 7 9.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clipRule="evenodd"></path></svg>);
}

export function IconAlert(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 4.898L4.232 18.352h15.536zM12 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"></path></g></svg>);
}

export function IconCashRegister(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M21 15h-2.5a1.503 1.503 0 0 0-1.5 1.5a1.503 1.503 0 0 0 1.5 1.5h1a1.503 1.503 0 0 1 1.5 1.5a1.503 1.503 0 0 1-1.5 1.5H17m2 0v1m0-8v1m-6 6H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m12 3.12V9a2 2 0 0 0-2-2h-2"></path><path d="M16 10V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6m8 0H8m8 0h1m-9 0H7m1 4v.01M8 17v.01m4-3.02V14m0 3v.01"></path></g></svg>);
}

export function IconClipboardCheck(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m9 13.4l1.714 1.6L15 11"></path><path strokeLinecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></path><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></path></g></svg>);
}

export function IconCalculator(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M21 12c0 4.714 0 7.071-1.318 8.535S16.242 22 12 22s-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464c.876.974 1.17 2.343 1.268 4.536"></path><path stroke="currentColor" strokeWidth={1.5} d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"></path><circle cx={8} cy={13} r={1} fill="currentColor"></circle><circle cx={8} cy={17} r={1} fill="currentColor"></circle><circle cx={12} cy={13} r={1} fill="currentColor"></circle><circle cx={12} cy={17} r={1} fill="currentColor"></circle><circle cx={16} cy={13} r={1} fill="currentColor"></circle><circle cx={16} cy={17} r={1} fill="currentColor"></circle></g></svg>);
}

export function IconFileAnalytics(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="currentColor"><path d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zM9 12a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m3 4a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m3-2a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1"></path><path d="M19 7h-4l-.001-4.001z"></path></g></svg>);
}

export function IconCircleCheck(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx={12} cy={12} r={10} opacity={0.5}></circle><path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12.5l2 2l5-5"></path></g></svg>);
}

export function IconNotes(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M8.945 1.25h6.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11l-.899-.001a1 1 0 0 1-.1 0c-.918-.007-1.693-.029-2.338-.115c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.097-.715-.113-1.59-.116-2.642H2a.75.75 0 0 1 0-1.5h.25v-2.5H2a.75.75 0 0 1 0-1.5h.25v-2.5H2a.75.75 0 0 1 0-1.5h.25c.004-1.052.02-1.927.117-2.642c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M3.75 8.75H4a.75.75 0 0 0 0-1.5h-.25c.004-1.046.02-1.826.103-2.442c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556c.4-.054.872-.08 1.441-.092V21.24a13 13 0 0 1-1.442-.092c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.083-.615-.099-1.395-.102-2.441H4a.75.75 0 0 0 0-1.5h-.25v-2.5H4a.75.75 0 0 0 0-1.5h-.25zm5 12.5H15c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8.75zm2-14.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clipRule="evenodd"></path></svg>);
}

export function IconExchange(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.53 6.53a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H17a.75.75 0 0 0 0-1.5H6.81zm8.94 6.94a.75.75 0 0 0 0 1.06l.72.72H7a.75.75 0 0 0 0 1.5h10.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0"></path></svg>);
}

export function IconPackageDeliver(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1}><path d="M7.5 7.5v10l8 3.5l8-3.5v-10"></path><path d="m7.5 7.5l8 3.5l8-3.5"></path><path d="m11.5 5.75l8 3.531V12.5"></path><path d="m7.5 7.5l8-3.5l8 3.5m-22 6.152l.047.022L5.5 15.5m-3.294-5.022L5.5 12M2.865 7.283L5.5 8.5m10 2.5v10"></path></g></svg>);
}

export function IconPackageImport(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 21l-8-4.5v-9L12 3l8 4.5V12m-8 0l8-4.5M12 12v9m0-9L4 7.5M22 18h-7m3-3l-3 3l3 3"></path></svg>);
}

export function IconInfoCircle(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 17v-6"></path><circle cx={1} cy={1} r={1} fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></circle><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path></g></svg>);
}