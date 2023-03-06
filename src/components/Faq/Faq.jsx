import React from "react";

function Faq() {
  return (
    <div className="z-20 px-14 flex items-center justify-center overflow-hidden ">
      <section className="text-gray-800 container">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Frequently asked questions
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="mb-12">
            <p className="font-bold mb-4">Why should i use this ?</p>
            <p className="text-gray-500">
              If you are serious about not loosing your data to some random free
              website then this is the one place you can trust.
            </p>
          </div>

          <div className="mb-12">
            <p className="font-bold mb-4">
              Are'nt there free websites for these ?
            </p>
            <p className="text-gray-500">
              Yes there are free websites that have some functionality .But can
              you really trust them with your valuble tokens.
            </p>
          </div>

          <div className="mb-12">
            <p className="font-bold mb-4">We can build our own tools site ?</p>
            <p className="text-gray-500">
              Yes sure you can do that . But its worth checking our plans which
              might be better than builing your own.
            </p>
          </div>

          <div className="mb-12">
            <p className="font-bold mb-4">Why is the pricing plans so low ?</p>
            <p className="text-gray-500">
              We want to help your teams be secure not take a cut of your
              profits.
            </p>
          </div>

          <div className="mb-12">
            <p className="font-bold mb-4">Why is it free for personal use ?</p>
            <p className="text-gray-500">
              We want to help hobby developers also enjoy the secure benifits
              just like enterprise users.
            </p>
          </div>
          <div className="col-md-12 mb-12">
            <p className="font-bold mb-4">
              My team can use this for free why should i get enterprise plan ?
            </p>
            <p className="text-gray-500">
              You would be supporting a small team of developers bulding useful
              software like this and help the developer community be secure .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
