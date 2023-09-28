function Tags(props) {

    const { tagsList } = props;

    return (
        <div className='tagsWrapper'>
            <ul>
                {tagsList.map((tag) => (
                    <li key={tag} className="tag">{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tags