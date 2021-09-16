import { CommentsForm } from './CommentsForm';
import { CommentsList } from './CommentsList';
import { useParams } from 'react-router';


export const Comments = () => {
    const { id } = useParams();

    return (
        <section>
            <div>
                <CommentsList itemId={id} />
            </div>
            <div>
                <CommentsForm />
            </div>
        </section>
    )
}