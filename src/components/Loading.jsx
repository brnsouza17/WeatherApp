import progress from "../assets/progress.svg";

export const Loading = () => {
    return (
        <img src={progress} alt="Ícone de carregamento" className="animate-spin w-[10vh] mx-auto" />
    )
}
