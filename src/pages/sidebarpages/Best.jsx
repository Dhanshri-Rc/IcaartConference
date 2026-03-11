import React from "react";

function Best() {
  return (
    <div className="px-4 py-4 text-[13px] text-justify ">

      <h1 className="text-[22px] font-bold mb-4">Best Paper Awards</h1>

      <p>
        The conference will have the following awards, which will be announced
        and bestowed at the conference closing session.
      </p>

      <ul className="list-[square] ml-6 mb-6">
        <li>Best Paper Award</li>
        <li>Best Student Paper Award</li>
        <li>Best Poster Award</li>
      </ul>

      <p>
        The author of an awarded paper, and co-authors if any, will be entitled to:
      </p>

      <ul className="list-[square] ml-6 mb-4">
        <li>A signed and stamped official award certificate;</li>
        <li>
          The announcement of their achievement on a special conference webpage;
        </li>
        <li>
          A one year free membership of INSTICC
          (<span className="text-blue-600 underline">http://www.insticc.org</span>),
          warranting full access to the SCITEPRESS Digital Library. If already an
          INSTICC member, then this offer adds one year to her/his current membership.
        </li>
        <li>
          A personal voucher for a free or reduced registration fee
          <span className="text-red-500">*</span> in one event sponsored by INSTICC,
          valid during a 12-month period. This voucher is only available if the
          presenter attends the closing session and receives the award.
        </li>
      </ul>

      <p>
        Only for best paper awards and best student paper awards:
      </p>

      <ul className="list-[square] ml-6 mb-6">
        <li>
          The invitation to submit an extended and revised version of the paper,
          aiming for its publication in a book or a journal, if a post-publication
          agreement is available for this particular conference;
        </li>
      </ul>

      <h2 className="font-bold text-[14px] mb-1">Selection Criteria</h2>

      <p>
        The awards will be conferred to the author(s) of a paper presented at the
        conference, selected by the Program/Conference/Doctoral Consortium Chairs.
        The decision criterion will consider both the paper quality (assessed by
        the Program Committee), and the oral presentation quality (feedback given
        by session chairs at the conference venue). As such, in order to enable a
        final ranking in a timely manner:
      </p>

      <ul className="list-[square] ml-6 mb-5">
        <li>
          Papers selected as candidates for best paper awards will be preferably
          presented in sessions on the first or second days of the conference.
        </li>
        <li>
          Candidates to "Best Student Paper Award" and "Best PhD Project Award"
          should be presented by students, though in the case of "Best Student
          Paper Award" authors may include senior members.
        </li>
      </ul>

      <p className="text-[13px]">
        <span className="text-red-500">*</span> Speakers are entitled to a 50%
        discount over the basic registration fee; non-speakers are entitled to a
        free registration.
      </p>

    </div>
  );
}

export default Best;