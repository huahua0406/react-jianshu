import React, { PureComponent } from 'react';
import { WriterWrapper, WriterTitle, WriterList, WriterItem } from '../style';

class Writer extends PureComponent {

	render() {
		return (
			<WriterWrapper>
                <WriterTitle>推荐作者</WriterTitle>
                <WriterList>
                    <WriterItem>
                        {/* <a href="javascript:viod;">
                            <img src="" alt="avatar"/>
                        </a> */}
                        念远怀人
                    </WriterItem>
                    <WriterItem>
                    念远怀人
                    </WriterItem>
                    <WriterItem>
                        念远怀人
                    </WriterItem>
                </WriterList>
            </WriterWrapper>
		)
	}
}

export default Writer;