// prop type
type IProps = {
  item: { id: number; question: string; answer: string };
};

export default function FaqItem({ item }: IProps) {
  return (
    <div className="accordion-items">
      <h2 className="accordion-header">
        <button
          className=" nt-text-white nt-pr-12 nt-py-8"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${item.id}`}
          aria-expanded="true"
          aria-controls={`collapse-${item.id}`}
        >
          {item.question}
          <span className="nt-text-white "></span>
        </button>
      </h2>
      <div
        id={`collapse-${item.id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
