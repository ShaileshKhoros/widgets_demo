import React, { useEffect,useState } from 'react';


interface IProps {
    loading: boolean;
    posts: any;
    
}

type Props = IProps;

const Files: React.FC<Props> = ({loading,posts}) => {
    console.log(loading,posts,"==========>")


        if (loading) {
          return <h2>Loading...</h2>;
        }
      
        return (
          <ul className='list-group mb-4'>
              xyz
            {posts.map((post: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
              <li key={post.id} className='list-group-item'>
                {post.title}
              </li>
            ))}
          </ul>
        );
      };

export default Files;
