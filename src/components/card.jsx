function Card({ data, button }) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">{button}</div>
                <div className="card-actions justify-end">{button}</div>
            </div>
        </div>
    );
}

export default Card;
