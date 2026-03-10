import React from "react";

function Contact() {
  return (
    <div className="px-2 py-4 text-black">

      {/* Page Title */}
      <h1 className="font-bold text-[24px] mb-8">Contacts</h1>

      {/* Section Title */}
      <h3 className="font-bold text-[16px] ">ICAART Secretariat</h3>

      {/* Dashed Divider */}
      <hr className="border-dashed border-gray-400 mb-5" />

      {/* Address */}
      <p className="text-[13px] mb-6">
        <span className="font-medium">Address:</span> Avenida de S. Francisco Xavier, Lote 7 Cv. C
        <br />
                           2900-616 Setúbal - Portugal
      </p>

      {/* Phone */}
      <p className="text-[13px] mb-6">
        <span className="font-medium">Tel.:</span> +351 265 520 185{" "}
        <span className="text-[11px] text-gray-600">
          (National fixed network call)
        </span>
      </p>

      {/* Fax */}
      <p className="text-[13px] mb-6">
        <span className="font-medium">Fax:</span> +351 265 520 186
      </p>

      {/* Email */}
      <p className="text-[13px]">
        <span className="font-medium">e-mail:</span>{" "}
        <span className="text-[#b45a00]">
          icaart.secretariat@insticc.org
        </span>
      </p>

    </div>
  );
}

export default Contact;