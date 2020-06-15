export class Advert{
    constructor(title,category,description,price,place,length,width,height,startingDate,endingDate,advertOwner,imageURL) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.price = price;
        this.place = place;
        this.length = length;
        this.width = width;
        this.height = height;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.advertOwner = advertOwner;
        this.imageURL = imageURL;
    }
}