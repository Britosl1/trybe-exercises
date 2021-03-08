let peca = 'Bishops'.toLowerCase();

switch(peca){
    case 'king':
        console.log("moves exactly one vacant square in any direction");
        break;

    case 'queen':
        console.log('moves any number of vacant squares in any direction');
        break;

    case 'rooks':
        console.log(' moves any number of vacant squares forwards, backwards, left, or right in a straight line');
        break;

    case 'bishops':
        console.log('moves any number of vacant squares diagonally in a straight line');
        break;
        
    case 'knights':
        console.log('moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner');
        break;

    case 'pawns':
        console.log('moves forward exactly one square');
        break;

    default:
        console.log('Does not exist');
}