// exemplo do lado do servidor
// a2.4/pages/posts/index.js
import dados from '../../dados.json';

export const getServerSideProps = (context) => {
  const posts = dados.posts.filter((post) => post.date === context.query.date);
  console.log(context.query);

  return {
    props: {
      posts,
    },
  };
};

export default function Posts(props) {
  return (
    <div>
      {props.posts.length > 0 ? (
        props.posts.map((post) => (
          <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
        ))
      ) : (
        <p>Nenhum post encontrado</p>
      )}
    </div>
  );
}