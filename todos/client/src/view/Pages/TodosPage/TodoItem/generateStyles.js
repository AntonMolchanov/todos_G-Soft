export function generateStyles(){
    return{
        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center',
            margin: "5px 5px",
            width: '80%',
            minHeight: '100px',
            ['@media(min-width: 768px)']: {
                maxWidth: '275px'
            }
        },
        completedCard: {
            textDecoration: 'line-through',


        },
        icon:{
            cursor: "pointer"
        }
    }
}