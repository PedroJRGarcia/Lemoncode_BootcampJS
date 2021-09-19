const mapPropertyFromApiToVm = property => {
    return {
        id: property.id,
        title: property.title,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m2`,
        notes:`${property.notes.substring(0, 240)}...`,
        price: `${property.price.toLocaleString()} €`,
        image: Array.isArray(property.images) ? property.images[0] : '',
    }
}

const getRoomWord = rooms => rooms > 1 ? 'Habitaciones' : 'Habitación';

export const mapPropertyListFromApiToVm = propertyList => {
    return propertyList.map(property => mapPropertyFromApiToVm(property));
}


