import React from 'react';

const TransportationIcon = ({ TransportationIcon }) => {
    return (
        <>
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0497 16.3543C26.8043 16.5997 26.7041 18.3387 26.7041 22.3463V27.9925L30.9528 32.2303C36.4872 37.7505 38.1893 38.8279 42.1209 39.3014C44.5308 39.5915 44.4772 39.372 42.9773 42.8012C41.3855 46.4414 41.4256 46.6214 44.0175 47.4562C46.5653 48.2768 46.3752 48.4062 49.7364 43.5585L52.4609 39.6289L62.4108 39.6272C77.2293 39.6249 79.2638 38.2152 73.2245 32.1335C68.4155 27.2913 66.822 26.6666 59.2776 26.6666H54.1673L52.055 23.2819C48.6102 17.7623 48.8775 18.025 46.709 18.025C43.7277 18.025 43.5479 18.3637 44.5449 22.1038C44.9816 23.742 45.4269 25.4423 45.5346 25.8822L45.7305 26.6821L41.4938 26.6023L37.2574 26.5225L35.7578 21.5784C34.9329 18.8592 34.171 16.4934 34.0647 16.3214C33.7876 15.8732 27.5014 15.9026 27.0497 16.3543ZM33.2011 20.8335C35.2125 27.41 35.3799 26.6666 31.889 26.6666H29.0085V22.4898V18.313H30.7192H32.4302L33.2011 20.8335ZM49.5095 23.4303L51.4311 26.5225L49.837 26.6098C47.8889 26.7167 48.1101 26.9653 47.2814 23.7379C46.0814 19.064 46.7396 18.9732 49.5095 23.4303ZM67.0314 29.9792L68.6157 30.8433L64.799 30.9237L60.9823 31.0041V32.0039V33.0037H65.9414H70.9002L72.2786 34.361C73.6828 35.7445 73.9268 36.363 73.311 36.9788C72.7014 37.5884 54.2419 37.4639 54.4769 36.8518C55.0084 35.4666 54.5786 35.3081 50.2904 35.3081H46.2622L45.8244 36.3558L45.3869 37.4034L43.3979 37.2185C39.5253 36.8587 36.9371 35.3813 32.7532 31.1429L30.5928 28.9546L48.0199 29.0346L65.4471 29.115L67.0314 29.9792ZM39.6664 31.9955C39.6664 32.9556 39.7145 33.0037 40.6746 33.0037C41.6347 33.0037 41.6828 32.9556 41.6828 31.9955C41.6828 31.0355 41.6347 30.9873 40.6746 30.9873C39.7145 30.9873 39.6664 31.0355 39.6664 31.9955ZM43.6992 31.9955C43.6992 32.9798 43.7265 33.0037 44.8514 33.0037C45.9762 33.0037 46.0036 32.9798 46.0036 31.9955C46.0036 31.0113 45.9762 30.9873 44.8514 30.9873C43.7265 30.9873 43.6992 31.0113 43.6992 31.9955ZM48.0199 31.9955C48.0199 32.9798 48.0473 33.0037 49.1722 33.0037C50.297 33.0037 50.3244 32.9798 50.3244 31.9955C50.3244 31.0113 50.297 30.9873 49.1722 30.9873C48.0473 30.9873 48.0199 31.0113 48.0199 31.9955ZM52.3407 31.9955C52.3407 32.9798 52.3681 33.0037 53.4929 33.0037C54.6178 33.0037 54.6451 32.9798 54.6451 31.9955C54.6451 31.0113 54.6178 30.9873 53.4929 30.9873C52.3681 30.9873 52.3407 31.0113 52.3407 31.9955ZM56.6615 31.9955C56.6615 32.9798 56.6889 33.0037 57.8137 33.0037C58.9386 33.0037 58.9659 32.9798 58.9659 31.9955C58.9659 31.0113 58.9386 30.9873 57.8137 30.9873C56.6889 30.9873 56.6615 31.0113 56.6615 31.9955ZM51.1885 37.4942C51.1885 38.1979 45.5292 45.5755 45.0798 45.4577C44.3559 45.2687 44.3735 45.1996 46.2012 41.0464L47.8393 37.3245H49.5138C50.435 37.3245 51.1885 37.4008 51.1885 37.4942ZM27.3522 46.1084C26.8052 46.5021 26.7041 46.8418 26.7041 48.2869V49.9988H24.5987C21.5946 49.9988 21.6905 49.8522 20.517 56.2406C19.9593 59.2773 19.5027 61.8271 19.5027 61.9063C19.5027 61.9858 18.8535 62.2664 18.0596 62.53C15.7969 63.2815 15.7969 63.3192 18.0659 69.6267C20.3499 75.9757 20.3142 75.802 19.3809 76.0362C18.9969 76.1327 18.3165 76.5135 17.8686 76.8828C17.4207 77.2518 16.8273 77.6366 16.5502 77.7377C15.7641 78.0246 15.8433 79.9563 16.6412 79.9563C17.3591 79.9563 18.2163 79.5259 19.3089 78.6171C20.3415 77.7582 21.2564 77.7582 22.2891 78.6171C24.5053 80.461 26.3103 80.461 28.5266 78.6171C29.6119 77.7144 30.4358 77.7636 31.753 78.8107C33.6743 80.3374 35.7273 80.3452 37.5622 78.8329C38.859 77.7639 39.635 77.7109 40.7244 78.6171C41.817 79.5259 42.6743 79.9563 43.3921 79.9563C44.1897 79.9563 44.2689 78.0255 43.4831 77.7366C43.2057 77.6346 42.5282 77.1849 41.9772 76.7373C41.4261 76.2897 40.7458 75.9235 40.4649 75.9235C39.7652 75.9235 39.703 76.1765 42.0066 69.6645C44.3205 63.1231 44.3219 63.31 41.9487 62.5216C41.1686 62.2627 40.5286 61.8991 40.526 61.7139C40.5237 61.5284 40.0743 58.9803 39.5276 56.0511C38.3751 49.8752 38.4586 49.9988 35.4346 49.9988H33.3293L33.3249 48.3425C33.3186 45.9586 33.1821 45.8373 30.3874 45.7319C28.5389 45.6622 27.854 45.7469 27.3522 46.1084ZM31.0248 48.9906C31.0248 49.9507 30.9767 49.9988 30.0167 49.9988C29.0566 49.9988 29.0085 49.9507 29.0085 48.9906C29.0085 48.0306 29.0566 47.9825 30.0167 47.9825C30.9767 47.9825 31.0248 48.0306 31.0248 48.9906ZM36.6206 52.6633C36.8516 53.4569 38.2008 61.0661 38.1245 61.1427C38.0793 61.1876 36.2429 60.6231 34.0436 59.8879L30.0446 58.5511L26.2861 59.7883C24.2187 60.4687 22.3864 61.0779 22.2142 61.1418C21.9149 61.2533 22.3403 58.2561 23.2365 53.94L23.5764 52.3032H30.046C34.974 52.3032 36.5408 52.3891 36.6206 52.6633ZM25.8399 55.4718V56.624H30.1607H34.4815V55.4718V54.3196H30.1607H25.8399V55.4718ZM46.3492 55.8175C45.8538 56.3129 45.8538 75.9466 46.3492 76.442C46.5627 76.6555 47.6118 76.7877 49.0929 76.7877C51.349 76.7877 51.5062 76.828 51.7496 77.4687C52.9805 80.7058 58.3014 80.6833 59.5639 77.4358C59.8079 76.8084 59.9381 76.788 63.6396 76.7943L67.4635 76.8007L67.9192 77.7305C69.3707 80.6914 74.0046 80.6897 75.3849 77.7273C75.8081 76.8191 75.8568 76.8001 77.7513 76.794C80.2651 76.786 80.2818 76.75 80.2818 71.3582V67.0432L78.4815 63.4898L76.6812 59.9366L73.1525 59.8557L69.6239 59.7747V57.9689C69.6239 56.9484 69.4735 56.0128 69.2782 55.8175C68.7819 55.3212 46.8456 55.3212 46.3492 55.8175ZM67.3195 66.1298V74.4833H63.5984H59.877L59.233 73.4411C57.596 70.7925 53.5906 70.804 52.0224 73.4618C51.4504 74.4311 51.3403 74.4833 49.8638 74.4833H48.308V66.1298V57.7762H57.8137H67.3195V66.1298ZM28.9918 68.5062L28.9748 75.7795L27.519 76.7157C24.3826 78.7323 23.3189 77.8282 20.9819 71.1592C20.0405 68.4722 19.1343 65.9258 18.9687 65.5009L18.6674 64.7278L23.7659 63.0032C26.5701 62.0544 28.8967 61.268 28.9365 61.2556C28.9762 61.2432 29.001 64.506 28.9918 68.5062ZM35.388 62.6864C41.6528 64.7385 41.3815 64.6051 41.105 65.4963C40.8846 66.2061 39.3876 70.4194 37.8886 74.5487C36.7574 77.6648 34.8914 78.3628 32.4798 76.5717L31.0254 75.4915L31.0251 68.5062C31.0248 62.7172 31.0937 61.5209 31.4273 61.5209C31.6488 61.5209 33.4309 62.0455 35.388 62.6864ZM71.6403 64.9675C71.6403 68.4414 71.6325 68.4342 75.3659 68.4342H77.9774V71.4587V74.4833H76.8252C76.1915 74.4833 75.673 74.3583 75.673 74.2053C75.673 72.7498 72.4494 71.0641 70.6275 71.5673L69.6239 71.8444V66.9706V62.097H70.6321H71.6403V64.9675ZM76.1872 63.9748C76.6964 65.0075 77.1132 65.9149 77.1132 65.9912C77.1132 66.0675 76.4003 66.1298 75.529 66.1298H73.9447V64.1134C73.9447 61.251 74.8175 61.1971 76.1872 63.9748ZM56.9055 74.1232C58.3665 75.3595 57.5836 77.6565 55.7043 77.6475C54.6244 77.6424 54.2727 77.443 53.8173 76.5777C52.8229 74.6895 55.2731 72.742 56.9055 74.1232ZM72.8976 74.2163C74.4194 75.4131 73.6002 77.6519 71.6403 77.6519C70.363 77.6519 69.6239 76.8969 69.6239 75.5923C69.6239 74.746 70.7755 73.6191 71.6403 73.6191C71.9145 73.6191 72.4802 73.8879 72.8976 74.2163Z" fill="black" />
            </svg>

        </>
    )
};

export default TransportationIcon;