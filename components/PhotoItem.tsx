import Image from "next/image";
import Router from "next/router";

interface ItemProps {
    item : {
        postNo: number;
        imageUrl: string;
        title: string;
        location: string;
        tag: Array<string>;
    },
    key : number
}

const PhotoItem = ({item, key} : ItemProps) =>{
    return (
        <div>
            <div onClick={() => Router.push(`/item/${item.postNo}`)}>
                <Image src = {item.imageUrl} alt="img"/>
                <div>{item.title}</div>
                <div>{item.location}</div>
                <div>{item.tag}</div>
            </div>
        </div>
    )
}
export default PhotoItem;