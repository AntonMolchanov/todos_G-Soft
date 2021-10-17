export function generateStyles() {
    return {
        modal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            width: '70%',
            border: '2px solid #006bb3',
            boxShadow: 24,
            padding: '40px',
            borderRadius: "10px",

            ['@media(min-width: 768px)']: {
                width: 400,
            }
        },
        icon: {
            color: "#00ccff",
            paddingLeft: '5px'
        },
        textField: {
            width: "300px",
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',

            ['@media(min-width: 768px)']: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }
        }
    }
}