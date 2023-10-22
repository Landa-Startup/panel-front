import React from 'react';
import ArrowLeftShort from '../icons/common/ArrowLeftShort';
import ArrowRightShort from '../icons/common/ArrowRightShort';

export default function Pagination() {
  return (
    <div className="flex gap-5 justify-center my-2">
      <div className="btn btn-xs rounded-sm p-2 h-8 w-8 items-center justify-center">
        <ArrowLeftShort />
      </div>

      <div className="btn btn-xs rounded-sm p-2 h-8 w-8 items-center justify-center">
        1
      </div>
      <div className="btn btn-xs rounded-sm p-2 h-8 w-8 items-center justify-center">
        2
      </div>
      <div className="btn btn-xs rounded-sm p-2 h-8 w-8 items-center justify-center">
        3
      </div>
      <div className="btn btn-xs rounded-sm p-2 h-8 w-8 items-center justify-center">
        4
      </div>
      <div className="btn btn-xs rounded-sm p-2 h-8 w-8 items-center justify-center">
        ...
      </div>
      <div className="btn btn-xs rounded-sm p-2 h-8 w-8 items-center justify-center">
        <ArrowRightShort />
      </div>
    </div>
  );
}
