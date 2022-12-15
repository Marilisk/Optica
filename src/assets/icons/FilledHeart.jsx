

export const FilledHeart = ({ color, size, margin, transform }) => {

    return <>
        <svg style={{ margin: `${margin}`, transform: `${transform}`, display: 'inline-block' }}
            fill={color}
            width={size} height={size}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Isolation_Mode" data-name="Isolation Mode">

            <path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z"/>

            

        </svg>

    </>
}