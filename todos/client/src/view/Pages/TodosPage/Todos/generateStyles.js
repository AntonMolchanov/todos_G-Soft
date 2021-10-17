
export function generateStyles(){
    return{
        todos: {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            ['@media (min-width: 768px)' ]:{
                marginLeft: '250px',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'unset',

            }
        }
    }
}