type Props = {
    label: string,
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const Button = ({label, onClick, disabled, className}: Props) => {

    if (disabled) {
        return (
            <div className={className}>
            <button disabled={true}>
                {label}
            </button>
        </div>
        );
    } else {
    return (
        <div className={"min-w-28 max-w-44 mx-3 px-1 py-2 text-center border hover:border-blue-500 rounded bg-grey-96"}>
            <button onClick={onClick}>
                {label}
            </button>
        </div>
    );
    }
}

export default Button;