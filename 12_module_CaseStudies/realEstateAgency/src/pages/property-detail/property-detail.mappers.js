export const mapPropertyDetailApiToVm = propertyDetail => {
    return {
        id: propertyDetail.id,
        title: propertyDetail.title,
        city: propertyDetail.city,
        rooms: `${propertyDetail.rooms} ${getRoomWord(propertyDetail.rooms)}`,
        bathrooms: `${propertyDetail.bathrooms} ${getBathRoomWord(propertyDetail.bathrooms)}`,
        squareMeter: `${property.squareMeter} m2`,
        notes:`${property.notes}`,
        price: `${property.price.toLocaleString()} €`,
        image: Array.isArray(property.images) ? property.images[0] : '',
        mainFeatures: propertyDetail.mainFeatures,
        equipmentIds: propertyDetail.equipmentIds,
        locationUrl: propertyDetail.locationUrl,
    }
}

const getRoomWord = rooms => rooms > 1 ? 'habitaciones' : 'habitación';
const getBathRoomWord = bathrooms => bathrooms > 1 ? 'baños' : 'baño';