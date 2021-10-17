export function generateStyles() {
    return {
        wrapper: {
            display: 'flex',
            justifyContent: 'center',

            ['@media (min-width: 768px)']: {
                display: 'block',
                marginLeft: "300px",
                marginTop: '20px'
            }
        },
        textField: {
            width: "300px"
        }
    }
}