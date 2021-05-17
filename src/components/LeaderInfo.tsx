import React from 'react';
import { Media } from 'reactstrap';
import { Leader } from '../redux/leader/leaderTypes';
import { BASE_URL } from '../shared/baseUrl';

type Props = {
    leader: Leader
}

export default function LeaderInfo({ leader }: Props) {
    return (
        <div data-test="component-leader-info" key={ leader.id } className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media data-test="media-image" object src={ BASE_URL + leader.image } alt={ leader.name } />
                </Media>
                <Media body className="ml-5">
                    <Media data-test="leader-name" heading>{ leader.name }</Media>
                    <p>{ leader.description }</p>
                </Media>
            </Media>
        </div>
    )
}
