export const mapPropertyDetailApiToVm = (propertyDetail, equipmentList) => {
    return {
        id: propertyDetail.id,
        title: propertyDetail.title,
        city: propertyDetail.city,
        rooms: `${propertyDetail.rooms} ${getRoomWord(propertyDetail.rooms)}`,
        bathrooms: `${propertyDetail.bathrooms} ${getBathRoomWord(propertyDetail.bathrooms)}`,
        squareMeter: `${propertyDetail.squareMeter} m2`,
        notes:`${propertyDetail.notes}`,
        price: `${propertyDetail.price.toLocaleString()} €`,
        mainImage: Array.isArray(propertyDetail.images) ? propertyDetail.images[0] : '',
        images: Array.isArray(propertyDetail.images) ? propertyDetail.images : '',
        mainFeatures: propertyDetail.mainFeatures,
        equipmentIds: getEquipments(propertyDetail.equipmentIds, equipmentList),
        locationUrl: propertyDetail.locationUrl,
    };
};

const getRoomWord = rooms => rooms > 1 ? 'habitaciones' : 'habitación';
const getBathRoomWord = bathrooms => bathrooms > 1 ? 'baños' : 'baño';

const getEquipments = (equipmentIds, equipmentList) => {
    const equipmentDetail = equipmentIds.map(id => {
        equipmentList.find(equipment => {
            return id === equipment.id ? equipment.name : '';
        })
    })
    return equipmentDetail;
}

export const mapContactVmToApi = contact => {
    return {
        id: contact.id,
        email: contact.email,
        message: contact.message,
    };
};