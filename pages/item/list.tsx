import PhotoItem from "@/components/PhotoItem";

interface Lists {
    postNo: number;
    imageUrl: string;
    title: string;
    location: string;
    tag: Array<string>;
}

const List = () => {
const lists: Lists[] = [
    {   
        postNo : 1, 
        imageUrl: "", 
        title: "사진 1",  
        location :"강남구", 
        tag: ["이미지", "tag"]
    },
    {   
        postNo : 2, 
        imageUrl: "", 
        title: "사진 2",  
        location :"강남구2", 
        tag: ["이미지2", "tag2"]
    },
];

return (
    <>
    {lists.map((list) => (
       <PhotoItem key={list.postNo} item={list}/>
      ))}
    </>
)
}

export default List;