import {FC} from 'react';

interface ICard {
    width: string;
    height: string;
    variant: string
}

export enum CardVariant {
    outlined = 'outlined',
    primary = "primary"
}

const Card: FC<ICard> = ({width, height, children, variant}) => {
    return (
        <div
            style={{
                width,
                height,
                border: variant === CardVariant.outlined ? '1px solid #e3e3e3' : "none",
                background: variant === CardVariant.primary ? '#e4e4e4' : '#fff'
            }}
        >
            {children}
        </div>
    );
};

export default Card;
