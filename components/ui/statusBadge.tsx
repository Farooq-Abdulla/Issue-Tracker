import { Status } from '@prisma/client'
import { Badge } from './badge'

interface IssueStateProps{
    issueState: Status
}
const StatusBadge = ({issueState}:IssueStateProps) => {
    switch (issueState) {
        case 'IN_PROGRESS':
            return <Badge className='bg-yellow-800'>{issueState}</Badge>
        case 'CLOSED':
            return <Badge className='bg-green-800'>{issueState}</Badge>
        case 'OPEN':
            return <Badge className='bg-red-800'>{issueState}</Badge>
    }
}

export default StatusBadge