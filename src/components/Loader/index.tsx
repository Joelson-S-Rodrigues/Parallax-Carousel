import { Container } from './styles';
import { ActivityIndicator } from 'react-native'

export function Loader() {
    return(
        <Container >
            <ActivityIndicator size={50} color='#000' />
        </Container>
    );
}